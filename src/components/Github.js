import React from 'react'
import {Card, Image, Button, Divider, List, Icon } from 'semantic-ui-react'


// const fancyName = (url) => {
//   let lastIndex = url.lastIndexOf('/')
//   let name = url.slice(lastIndex+1)
//   return name.split('-').map( word => word[0].toUpperCase() + word.slice(1)).join(" ")
//   }

const displayLinks = (github) => {
  if (github.repo_url_back || github.demo_url) {
    return(
      <div style={{textAlign: 'center'}}>
        {github.repo_url_front && 
          <p>
            <a href={github.repo_url_front} target="_blank" rel="noopener noreferrer">
              Front End Repo
            </a>
          </p>
        } 
        {github.repo_url_back && 
          <p>
            <a href={github.repo_url_back} target="_blank" rel="noopener noreferrer">
            Back End Repo
            </a>
          </p>
        }
        {github.demo_url && <p><a href={github.demo_url} target="_blank" rel="noopener noreferrer">Demo</a></p>}
      </div>
    )
  } else {
    return <div style={{textAlign: 'center'}}><a href={github.repo_url_front} target="_blank" rel="noopener noreferrer">On Github</a></div>
  }
}

const Github = (props) => {
  let github = props.github
  return (
  <Card raised className="corner-sharp">
    {props.loggedIn
      ? <Card.Content>
          <Button onClick={_ => props.shiftOrder('githubs', github, false)}>
            <Button.Content > <Icon name="left arrow" fitted /> </Button.Content>
          </Button>
          <Button onClick={_ => props.shiftOrder('githubs', github, true)}>
            <Button.Content> <Icon name="right arrow" fitted /> </Button.Content>
          </Button>
          <Button onClick={_ => props.startEdit(github, 'githubs')} floated='right' color="linkedin">
            <Button.Content> <Icon name="edit" fitted /> </Button.Content>
          </Button>
        </Card.Content>
      : null
    }
    <Card.Content target="_blank" className="card-height">
      <Card.Header style={{marginBottom: '10px'}} textAlign="center">
        {github.name}
      </Card.Header>
      <Image 
        src={github.img_url}
        size="medium" 
        rounded
        style={{display: 'block', margin: 'auto', marginBottom: '10px'}} 
      />
      <Card.Meta>
        <div>{displayLinks(github)}</div>
      </Card.Meta>
      <Divider />

      <Card.Meta>         {github.summary}        </Card.Meta>
      <Divider />

      <Card.Description> 
        <List relaxed bulleted>
          {github.contribution.map(con => {
            return <List.Item key={con}>
              {con}
            </List.Item>
          })}
        </List>
      </Card.Description>
    </Card.Content>

  </Card>
  )
}

export default Github