import React from 'react'
import { Grid, Popup, Image, Button } from 'semantic-ui-react'

export default function Skill(props) {

  return(
    <> 
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
    </>
  )
}