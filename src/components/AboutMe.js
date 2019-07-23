import React from 'react'
import { Grid } from 'semantic-ui-react'

import TextParser from './TextParser'
import SectionHeading from './SectionHeading'

const AboutMe = (props) => {
  if (!props.user.bio) {
    return (
      <div>
      <SectionHeading text='About Me'
        startEdit=  {_ => props.startEdit(props.user, 'users')}
        editing=    {props.editing}
        loggedIn=   {props.loggedIn}
        sectionEdit={true}
        user=       {props.user}
      />
      </div>
    )
  } else {
    let text = TextParser(props.user.bio)

    return (
      <div>
        <SectionHeading text='About Me'
          startEdit=  {_ => props.startEdit(props.user, 'users')}
          editing=    {props.editing}
          loggedIn=   {props.loggedIn}
          sectionEdit={true}
          user=       {props.user}
        />
      <Grid columns='equal'>
        <Grid.Row columns={16}>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <span className='text'> 
              {text}
            </span>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
        <br />
        </Grid>
      </div>
    )
  }
}

export default AboutMe