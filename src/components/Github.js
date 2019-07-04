import React from 'react'
import {Card, Image, Button, Icon, Grid} from 'semantic-ui-react'


const fancyName = (name) => {
  return name.split('-').map( word => word[0].toUpperCase() + word.slice(1)).join(" ")
  }

const Github = (props) => {
  let github = props.github
  let _name = fancyName(github.repo_name)
  return (
  <Card raised className="corner-sharp">
    {props.loggedIn
      ? <Card.Content>
          <Grid columns={2}>
            <Grid.Column textAlign="center">
              <Button.Group>
                <Button icon onClick={_ => props.shiftOrder('githubs', github, false)}>
                  <Button.Content><Icon name='left arrow'></Icon></Button.Content>
                </Button>
                <Button icon onClick={_ => props.shiftOrder('githubs', github, true)}>
                  <Button.Content><Icon name='right arrow'></Icon></Button.Content>
                </Button>
              </Button.Group>
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Button icon onClick={_ => props.startEdit(github, 'githubs')}>
                <Button.Content><Icon name='edit'></Icon></Button.Content>
              </Button>
            </Grid.Column>
          </Grid>
        </Card.Content>
      : null
    }
    <Card.Content href={`https://github.com/${github.repo_owner}/${github.repo_name}`}
        target="_blank" className="card-height">

        <Image floated='right' size='mini' src={github.img_url} />
        <Card.Header>       {_name}             </Card.Header>
        <Card.Meta>         {github.summary}        </Card.Meta>
        <Card.Description>  {github.contribution}   </Card.Description>

    </Card.Content>

  </Card>
  )
}

export default Github
