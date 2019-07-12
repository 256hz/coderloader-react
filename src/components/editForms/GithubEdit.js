import React, { Component } from 'react'
import { 
  Form, 
  Button, 
  Input,
  Header
  } from 'semantic-ui-react'

export default class GithubEdit extends Component {

  constructor(props){
    super(props)
    this.state = {
      content:{
        id: -1,
        name: '',
        demo_url: '',
        repo_url_back: '',
        repo_url_front: '',
        contribution: [''],
        summary: ''
      }
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.content.id !== state.content.id) {
      return {content: props.content}
    } else {
      return null
    }
  }

  handleChange = (ev) => {
    this.setState({
      content:{
        ...this.state.content,
        [ev.target.name]: ev.target.value
      }
    })
  }

  handleNestedChange = (ev, i) => {
    let copy = this.state.content[ev.target.name]
    copy[i] = ev.target.value
    this.setState({
      content:{
        ...this.state.content,
        [ev.target.name]: copy
      }
    })
  }

  handleAddContribution = () => {
    let contributionCopy = this.state.content.contribution
    contributionCopy.push('')
    this.setState({
      content:{
        ...this.state.content,
        contribution: contributionCopy
      }
    })
  }

  handleRemoveContribution = (i) => {
    let contributionCopy = this.state.content.contribution
    contributionCopy.splice(i,1)
    this.setState({
      content:{
        ...this.state.content,
        contribution: contributionCopy
      }
    })
  }

  render(){
    return(
      <Form inverted onSubmit={() => this.props.handleSubmit(this.state.content)}>
        <Header size='large' inverted>
          Edit Repo
        </Header> 

        <Form.Field>
          <label>Name</label>
          <input name='name' value={this.state.content.name} onChange={this.handleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Front End Repo URL</label>
          <input name='repo_url_front' value={this.state.content.repo_url_front} onChange={this.handleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Back End Repo URL</label>
          <input name='repo_url_back' value={this.state.content.repo_url_back} onChange={this.handleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Demo URL</label>
          <input name='demo_url' value={this.state.content.demo_url} onChange={this.handleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Summary</label>
          <textarea name='summary' value={this.state.content.summary} onChange={this.handleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Contributions</label>
          {this.state.content.contribution.map((con, i) => {
            return (
              <Form.Field key={'con_field_'+i}>
                <Input name='contribution' 
                  key={'con_input_'+i}
                  value={con} 
                  onChange={(ev) => this.handleNestedChange(ev, i)}
                  action={{
                    type: 'button', 
                    onClick: () => this.handleRemoveContribution(i),
                    icon: 'delete', 
                    color: 'red', 
                    }}
                />
              </Form.Field>      
            )
          })}
          <Button type='button' onClick={this.handleAddContribution}>Add New Contribution</Button>
        </Form.Field>
        
        <Form.Field>
          <label>Image URL</label>
          <input name='img_url' value={this.state.content.img_url} onChange={this.handleChange}/>
        </Form.Field>

        <Button type='submit' color='linkedin'>Submit</Button>
        <Button negative type='button' onClick={() => this.props.handleDelete(this.state.content)}>Delete</Button>
      </Form>
    )
  }
}