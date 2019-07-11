import React from 'react'
import SectionHeading from './SectionHeading'
import Job from './Job'
import { Grid, Card } from 'semantic-ui-react';

const Jobs = (props) => {
  if (!props.jobs) {
    return <span className="font-heading font-size-large">Loading...</span>
  } else {
    let jobs = props.jobs.sort( (a,b) => a.order_id - b.order_id )
    return(
      <div>
        <SectionHeading text="Positions"
          startEdit =   {_ => props.startEdit(props.jobs, '#jobs')}
          startNew =    {_ => props.startNew('jobs')}
          editing =     {props.editing}
          loggedIn =    {props.loggedIn}
          sectionEdit = {false}
          sectionNew =  {true}

        user={props.user}
        />

        <Grid columns={'equal'} stackable centered>
          <Grid.Row columns={16} padded="horizontally" centered>
            <Grid.Column width={2} />
            <Grid.Column width={12} >

              <Card.Group itemsPerRow={1}>
                {jobs.map( (job,index) => 
                  <Job 
                    key =         {job.company + index}
                    job =         {job}
                    loggedIn =    {props.loggedIn}
                    shiftOrder =  {props.shiftOrder}
                    startEdit =   {props.startEdit}
                  />
                )}
              </Card.Group>
              
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Jobs
