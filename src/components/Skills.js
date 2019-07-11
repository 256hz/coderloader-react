import React from 'react'
import { Grid } from 'semantic-ui-react'

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
      return (
      <div>
        <SectionHeading text="Primary Skillsets"
          editing={this.props.editing}
          loggedIn={this.props.loggedIn}
          sectionEdit={false}
          sectionNew={true}
          startEdit={_ => this.props.startEdit(skills, 'skills')}
          startNew={_ => this.props.startNew('skills')}
          user={this.props.user}
        />

        <Grid columns={16} stackable centered>
          <Grid.Column />
          <Grid columns={'equal'} textAlign="center" stackable centered>
            {skills.map( (skill, index) => {
              return(
                <Skill skill={skill} 
                  index={index} 
                  key={skill.name+index}
                  loggedIn={this.props.loggedIn}
                  startEdit={this.props.startEdit}
                />)
            })}
          </Grid>
          <Grid.Column />
        </Grid>
        <br />
      </div>
      )
    }
  }
}
