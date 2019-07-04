import React from 'react'
import { Grid } from 'semantic-ui-react'

import SectionHeading from './SectionHeading'
import Skill from './Skill'

const Skills = (props) => {
  if (!props.skills) {
    return "Loading. . ."
  } else {
    let skills = props.skills.sort( (a,b) => a.order_id - b.order_id )
    return (
    <div>
      <SectionHeading text="Primary Skillsets"
        startEdit={_ => props.startEdit(skills, 'skills')}
        startNew={_ => props.startNew('skills')}
        editing={props.editing}
        loggedIn={props.loggedIn}
        sectionEdit={true}
        sectionNew={true}
        user={props.user}
      />

      <Grid columns={'equal'} stackable centered>
        <Grid.Column />
            {skills.map( (skill, index) => {
              return(<Skill skill={skill} index={index} key={skill.name+index}/>)
            })}
        <Grid.Column />
      </Grid>
      <br />
    </div>
    )
  }
}

export default Skills
