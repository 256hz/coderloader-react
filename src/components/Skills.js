import React from 'react'
import { Grid, Popup, Image, Button } from 'semantic-ui-react'

import SectionHeading from './SectionHeading'
import Skill from './Skill'

export default class Skills extends React.Component {
  constructor() {
    super()
    this.state = {
      modalVisible: false
    }
  }

  toggleModal() {
    this.setState({modalVisible: !this.state.modalVisible})
  }

  render() {
    if (!this.props.skills) {
      return "Loading. . ."
    } else {
      let skills = this.props.skills.sort( (a,b) => a.order_id - b.order_id )
      // let columns=1
      // this.props.loggedIn ? columns = skills.length*2+3 : columns = skills.length + 2
      return (
      <div>
        <SectionHeading text="Primary Skillsets"
          startEdit={_ => this.props.startEdit(skills, 'skills')}
          startNew={_ => this.props.startNew('skills')}
          editing={this.props.editing}
          loggedIn={this.props.loggedIn}
          sectionEdit={true}
          sectionNew={true}
          user={this.props.user}
        />

        <Grid columns={16} stackable centered>
          <Grid.Column width={1}/>
            <Grid columns={'equal'} stackable centered textAlign="center">
              {skills.map( (skill, index) => {
                return(
                  <Skill skill={skill} 
                    index={index} 
                    loggedIn={this.props.loggedIn}
                  />)
              })}
            </Grid>
          <Grid.Column width={1}/>
        </Grid>
        <br />
      </div>
      )
    }
  }
}
