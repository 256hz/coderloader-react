import React from 'react'
import { Card, List, Button, Image, Icon } from 'semantic-ui-react';

const Job = (props) => {
  return(
        <Card raised className="corner-sharp">
          {props.loggedIn
            ? <Card.Content>
                <Button onClick={_ => props.shiftOrder('jobs', props.job, false)}>
                  <Button.Content > <Icon name="up arrow" fitted /> </Button.Content>
                </Button>
                <Button onClick={_ => props.shiftOrder('jobs', props.job, true)}>
                  <Button.Content> <Icon name="down arrow" fitted /> </Button.Content>
                </Button>
                <Button onClick={_ => props.startEdit(props.job, 'jobs')} floated='right' color="linkedin">
                  <Button.Content> <Icon name="edit" fitted /> </Button.Content>
                </Button>
              </Card.Content>
            : null
          }

          <Card.Content>
            <Image spaced floated="left" size="tiny" src={props.job.img_url} alt={props.job.company}/>
            <Card.Header>   {props.job.title}     </Card.Header>
            <Card.Meta>     {props.job.company}   </Card.Meta>
            <Card.Meta>     {props.job.start_month} {props.job.start_year} - {props.job.end_month}
                            {' '}{props.job.end_year ? props.job.end_year : 'Present'}
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Card.Meta>       SUMMARY               </Card.Meta>
            <Card.Description>{props.job.summary}   </Card.Description>
          </Card.Content>
          <Card.Content>
            <Card.Meta>       SKILLS USED           </Card.Meta>
            <Card.Description>
              <List bulleted>
                {props.job.skills_used.map(skill => {
                    return <List.Item key={skill} className="font_size_small">{skill}</List.Item>
                  })}
              </List>
            </Card.Description>
          </Card.Content>
          <Card.Content>
          <Card.Meta>         RESPONSIBILITIES      </Card.Meta>
            <Card.Description>
              <List bulleted>
                {props.job.responsibilities.map( (res, index) => {
                    return <List.Item key={res + index} className="font_size_small">{res}</List.Item>
                  })}
              </List>
            </Card.Description>
          </Card.Content>

        </Card>
    )
}

export default Job

// {props.loggedIn ?
//   <Card.Content extra>
//     <Button onClick={_ => props.startEdit(props.job, 'jobs')} icon="pencil square"/>
//     <Button type="button" onClick={_ => props.shiftOrder('jobs', props.job, false)} icon="up arrow"/>
//     <Button type="button" onClick={_ => props.shiftOrder('jobs', props.job, true)} icon="down arrow"/>
//   </Card.Content>
//   : null}