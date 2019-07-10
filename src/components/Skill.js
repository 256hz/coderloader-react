import React from 'react'
import { Grid, Popup, Image, Button } from 'semantic-ui-react'

export default function Skill(props) {
  if (props.loggedIn) {
    return(
        <Grid.Column textAlign="center">
          <Button 
            className="skill-button" 
            onClick={_ => props.startEdit(props.skill, 'skills')}
          >
            <Popup key={props.skill.name+props.index} 
              header={props.skill.name} 
              textAlign="center"
              position="bottom center" 
              trigger={
                <Image src={props.skill.img_url} 
                  className="image-circle-small-skill"
                />
              }
            />
          </Button>
        </Grid.Column>
    )
  } else {
    return(
      <Grid.Column textAlign="center">
        <Popup key={props.skill.name+props.index}
          header={props.skill.name} 
          textAlign="center"
          position="bottom center" 
          trigger={
            <Image src={props.skill.img_url} 
              className="image-circle-small-skill"
              verticalAlign="middle" 
              size="tiny" 
              circular
            />
          }
        />
      </Grid.Column>
    )
  }
}