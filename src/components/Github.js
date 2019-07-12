import React from 'react'
import {Card, Image, Button, Divider, List, } from 'semantic-ui-react'

const displayLinks = (github) => {
  if (github.repo_url_back || github.demo_url) {
    return(
      <div className='centered font-size-small'>
        <p>
        {github.repo_url_front && 
          <span>
            <a href={github.repo_url_front} target='_blank' rel='noopener noreferrer'>
              Front End Repo
            </a>
          </span>
        } 
        {github.repo_url_back && 
          <span>|{' '}
            <a href={github.repo_url_back} target='_blank' rel='noopener noreferrer'>
              Back End Repo
            </a>
          </span>
        }
        {github.demo_url && 
          <span>|{' '}
            <a href={github.demo_url} target='_blank' rel='noopener noreferrer'>
              Demo
            </a>
          </span>
        }
        </p>
      </div>
    )
  } else {
    return( 
      <div style={{textAlign: 'center'}}>
        <a href={github.repo_url_front} target='_blank' rel='noopener noreferrer'>
          Github
        </a>
      </div>
    )
  }
}

const Github = (props) => {
  let github = props.github
  return (
    <Card raised className='corner-sharp'>

      {props.loggedIn
        ? <Card.Content>
            <Button 
              onClick={_ => props.shiftOrder('githubs', github, false)} 
              floated='left'
              size='large'
              icon='left arrow'
              />
            <Button 
              onClick={_ => props.shiftOrder('githubs', github, true)} 
              floated='left'
              size='large'
              icon='right arrow'
              />
            <Button 
              onClick={_ => props.startEdit(github, 'githubs')} 
              floated='right'
              size='large' 
              icon='edit'
              color='linkedin'
              />
          </Card.Content>
        : null
      }

      <Card.Content target='_blank' className='card-height'>        
        <Image 
          src={github.img_url}
          style={{display: 'block', margin: 'auto', marginBottom: '10px'}} 
        />
        
        <Card.Header style={{marginBottom: '10px'}} textAlign='center'>
          {github.name}
        </Card.Header>
        
        <Card.Meta>
          <div>{displayLinks(github)}</div>
        </Card.Meta>
        <Divider />

        <Card.Description>
          {github.summary}
        </Card.Description>
        <Divider />

        <Card.Description>
          <Card.Meta>
            CONTRIBUTIONS
          </Card.Meta> 
          <List relaxed bulleted className='left text'>
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