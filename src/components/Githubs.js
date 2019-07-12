import React from 'react'
import Github from './Github'
import SectionHeading from './SectionHeading'
import {Grid, Card} from 'semantic-ui-react'


const Githubs = (props) => {
  if (!props.githubs) {
    return <span className='font-heading font-size-large'>Loading...</span>
  } else {
    let githubs = props.githubs.sort( (a,b) => a.order_id - b.order_id )
    return (
      <div>
        <SectionHeading text='Featured Repos'
          getContent =  { _ => props.getContent(props.githubs)}
          editing =     {props.editing}
          loggedIn =    {props.loggedIn}
          sectionEdit = {false}
          sectionNew =  {true}
          startNew =    {_ => props.startNew('githubs')}
          user =        {props.user}
        />
        
        <Grid columns={'equal'} stackable centered>
          <Grid.Row columns={16}>
            <Grid.Column width={2} />
            <Grid.Column width={12}>
              <Card.Group centered>
                <br />
                {githubs.map( (github, index) => {
                  return <Github 
                            key =        {github.name + index}
                            github =     {github} 
                            loggedIn =   {props.loggedIn} 
                            shiftOrder = {props.shiftOrder}
                            startEdit =  {props.startEdit}
                          />
                })}
              </Card.Group>
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
        <br />
        </Grid>
      </div>
    )
  }
}

export default Githubs
