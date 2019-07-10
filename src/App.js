import './App.css';
import React from 'react'
import { Icon, Menu, Segment, Sidebar, Sticky } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Content from './components/Content'
import Login from './components/Login'
import LoggedIn from './components/LoggedIn'
import Editor from './components/Editor'

const apiURL = 'http://localhost:3000/api/v1/'
const HEADERS_AUTH = {
  'Authorization': 'Bearer ' + localStorage.jwt,
  'Content-Type': 'application/json'
}
const HEADERS_NOAUTH = { 'Content-Type': 'application/json'}

const DEFAULT_STATE = {
  jobs: [],
  githubs: [],
  interests: [],
  skills: [],
  honors: [],
  links: [],
  users: [],

  message: '',
  currentUser: {},
  sidebarVisible: false,
  loggedIn: false,
  editorDisabled: true,
  editing: {},
  editingType: '',
  editingSkill: {},
  creating: {},
  creatingType: ''
}

// used to automate fetch -- the first 7 entries in default state
// are the names of the resources we want to fetch.
const anchors = Object.keys(DEFAULT_STATE).slice(0, 7)

class App extends React.Component {
    constructor() {
        super()
        this.state = DEFAULT_STATE
    }

    componentDidMount() {
      // check for logged in user
      if (!!localStorage.jwt && !!localStorage.username) {
        this.setState({loggedIn: true, username: localStorage.username})
      } else {
        this.setState({loggedIn: false})
      }
      // automated fetch
      anchors.forEach( a => {
        fetch( apiURL + a )
        .then( res => res.json() )
        .then( json => this.setState({[a]: json}) )
      })
      // special fetch for users - only works for one user
      fetch( apiURL + 'users').then( res => res.json() )
      .then( users => {
        this.setState({users})
        this.setState({currentUser: users[0]})
      })
    }

    toggleSidebar = () => {
      // open or close sidebar & clear editingType
      this.setState({
        sidebarVisible: !this.state.sidebarVisible,
        editingType: ''
      })
    }

    login = (ev, username, password) => {
      ev.preventDefault()
      this.setState({message: ''})
      // no-auth POST to retrieve JWT from Rails
      fetch(apiURL + 'login', {
        method: 'POST',
        headers: HEADERS_NOAUTH,
        body: JSON.stringify({ user: {username, password}})
      }).then( res => res.json() )
        .then( json => {
          if (json && json.jwt) {
            localStorage.setItem('jwt', json.jwt)
            localStorage.setItem('username', username)
            this.setState({username: username, loggedIn: true})
          } else {
            localStorage.removeItem('jwt')
            localStorage.removeItem('username')
            this.setState({username: '', message: json.message, loggedIn: false})
          }
          this.setState({sidebarVisible: false})
        })
  }

    logOut = () => {
      this.setState({
        loggedIn: false,
        sidebarVisible: false
      })
      localStorage.removeItem('jwt')
      localStorage.removeItem('username')
    }

    startEdit = (content, type) => {
      // for logged-in users. Handles all clicks of the "edit" icon in SectionHeadings
      if (localStorage.getItem('jwt') !== '') {
        this.setState({
          editing: content,
          editingType: type,
          creatingType: '',
          sidebarVisible: true
        })
      } else {
        alert('Please log in to edit')
      }
    }

    startNew = (type) => {
      // for logged-in users. Handles all clicks of the "add circle" icon in SectionHeadings
      if (localStorage.getItem('jwt') !== '') {
        this.setState({
          editing: {},
          editingType: '',
          creating: {
            content: {
              user_id: this.state.currentUser.id
            }
          },
          creatingType: type,
          sidebarVisible: true
        })
      } else {
        alert('Please log in to add ' + this.state.creatingType)
      }
    }

    handleSubmit = (content) => {
      fetch(apiURL+this.state.editingType+'/'+content.id, {
        method: "PATCH",
        headers: HEADERS_AUTH,
        body: JSON.stringify({...content})
      })
      .then(res => res.json())
      .catch(error => console.log(error))
      .then(json => {
        let editingTypeCopy=this.state.editingType
        switch(editingTypeCopy) {
          case "users": this.setState({users: [json], currentUser: json})
            break
          case "skills": let skillsCopy = this.state.skills.map(skill => {
              return (skill.id === content.id) ? content : skill
            })
            this.setState({skills: skillsCopy})
            break
          case "jobs": let jobsCopy = this.state.jobs.map(job => {
              return (job.id === content.id) ? content : job
            })
            this.setState({jobs: jobsCopy})
            break
          case "githubs": let githubsCopy = this.state.githubs.map(github => {
              return (github.id === content.id) ? content : github
            })
            this.setState({githubs: githubsCopy})
            break
          default: return null
        }
        this.setState({sidebarVisible: false, editingType: ''})
      })
    }

    shiftOrder = (incomingGroup, item, next) => {
      // for changing order of skills, jobs, and githubs
      let group = this.state[incomingGroup].sort( (a,b) => a.order_id - b.order_id )
      let orderIds = group.map( s => s.order_id )
      let curIndex = orderIds.indexOf( item.order_id )
      let maxPos = orderIds.length-1
      let move = next ? 1 : -1 //if next is true, shift up; else shift down

      if (curIndex === maxPos && next) {
        let t = orderIds[maxPos]
        orderIds[maxPos] = orderIds[0]
        orderIds[0] = t
      } else if (curIndex === 0 && !next) {
        let t = orderIds[0]
        orderIds[0] = orderIds[maxPos]
        orderIds[maxPos] = t
      } else {
        let t = orderIds[curIndex]
        orderIds[curIndex] = orderIds[curIndex + move]
        orderIds[curIndex + move] = t
      }

      group.forEach( (item, index) => {
        // check if item's order has been changed, and if so, PATCH its order_id
        if (item.order_id !== orderIds[index]) {
          item.order_id = orderIds[index]
          fetch(apiURL + '/' + incomingGroup + '/'+ item.id, {
            method: "PATCH",
            headers: HEADERS_AUTH,
            body: JSON.stringify({...item})
          }).then( res => res.json() )
            .then( console.log )
        }
      })
      this.setState({ [group]: group })
    }

    handleCreate = (content) => {
      content['order_id']=this.state[this.state.creatingType].length
      fetch(apiURL+this.state.creatingType, {
        method: "POST",
        headers: HEADERS_AUTH,
        body: JSON.stringify({
          ...content,
          user_id: this.state.currentUser.id
        })
      })
      .then(res => res.json())
      .catch(error => console.log(error))
      .then(json => {
        let creatingTypeCopy=this.state.creatingType
        this.setState({
          [creatingTypeCopy]: [...this.state[creatingTypeCopy], json],
          creatingType: '',
          sidebarVisible: false
        })
      })
    }

    handleDelete = (content) => {
      fetch(apiURL+this.state.editingType+'/'+content.id, {
        method: "DELETE",
        headers: HEADERS_AUTH
      })
      .then(res => res.json())
      .then(json => {
        let copy = this.state[this.state.editingType]
        copy.splice(copy.findIndex(el => el.id === json.id),1)
        this.setState({
          [this.state.editingType]: copy,
          editingType: '',
          sidebarVisible: false
        })
      })
    }

    render() {
        // All content is nested within the Sidebar object.  Inside the sidebar (<Sticky>), 
        // components are as follows:
        // - Close button
        // - Login/LoggedIn (login bar/welcome message & logout)
        // - Navigation links (shows if we're not editing or creating anything)
        // - Editor (shown if we are editing/creating things) 
        // Site content is rendered next.
        return(
          <Sidebar.Pushable as={Segment} className="fix-sidebar">
            <Sticky >
              <Sidebar as={Menu} animation='overlay'
                direction='right' icon='labeled'
                inverted vertical
                visible={this.state.sidebarVisible}
                width='wide'
              >
                <Menu.Item as='a' onClick={this.toggleSidebar}>
                  <Icon name='bars' size="mini"/>
                  Close
                </Menu.Item>

                <Menu.Item as='a'>
                    {(this.state.loggedIn && localStorage.getItem('jwt'))
                      ? <LoggedIn username={this.state.currentUser.first_name} logOut={this.logOut}/>
                      : <Login login={this.login} message={this.state.message}/>
                    }
                </Menu.Item>
                
                {this.state.editingType === "" && this.state.creatingType === "" &&
                  (<>
                    <Link className="item font-heading" to="/#skills"  onClick={this.toggleSidebar}> SKILLS </Link>
                    <Link className="item font-heading" to="/#jobs"    onClick={this.toggleSidebar}> JOBS   </Link>
                    <Link className="item font-heading" to="/#github"  onClick={this.toggleSidebar}> GITHUB </Link>
                    <Link className="item font-heading" to="/#contact" onClick={this.toggleSidebar}> CONTACT</Link>
                  </>)
                }

                <Editor
                  creating={this.state.creating}
                  creatingType={this.state.creatingType}
                  editing={this.state.editing}
                  editorDisabled={this.state.editorDisabled}
                  editingType={this.state.editingType}
                  handleCreate={this.handleCreate}
                  handleDelete={this.handleDelete}
                  handleSubmit={this.handleSubmit}
                  startEdit={this.startEdit}
                />

              </Sidebar>
            </Sticky>
            <Sidebar.Pusher dimmed={false}>
              <Segment basic className={this.state.currentUser.color_theme}>

                <Content
                  currentUser= {this.state.currentUser}
                  editing={this.state.editing}
                  editingSkill={this.state.editingSkill}
                  githubs={this.state.githubs}
                  honors={this.state.honors}
                  interests={this.state.interests}
                  jobs={this.state.jobs}
                  links={this.state.links}
                  loggedIn={this.state.loggedIn}
                  skills={this.state.skills}
                  toggleSidebar={this.toggleSidebar}
                  shiftOrder={this.shiftOrder}
                  startEdit={this.startEdit}
                  startNew={this.startNew}
                  users={this.state.users}
                />

              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        )
    }
}

export default App
