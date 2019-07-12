import React from 'react';
import Nav from './Nav'
import NamePicIntro from './NamePicIntro'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Jobs from './Jobs'
import Githubs from './Githubs'
import Skills from './Skills'
import { Grid } from 'semantic-ui-react'

const Content = (props) => {

  return (
    <Grid columns='equal'>

      <Grid.Row key='nav' id='nav'>
        <Grid.Column>
          <Nav toggleSidebar={props.toggleSidebar} loggedIn={props.loggedIn}/>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row key='name' id='name'>
        <Grid.Column>
          <NamePicIntro 
            user={props.currentUser}    editing={props.editing}
            startEdit={props.startEdit} loggedIn={props.loggedIn}/>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row key='about' id='about'>
        <Grid.Column>
          <AboutMe 
            user={props.currentUser}     editing={props.editing}
            startEdit={props.startEdit}  loggedIn={props.loggedIn}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row key='skills' id='skills'>
        <Grid.Column>
          <Skills 
            skills={props.skills}         editing={props.editing}
            startEdit={props.startEdit}   loggedIn={props.loggedIn}
            shiftOrder={props.shiftOrder} startNew={props.startNew}
            user={props.currentUser}      
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row key='github' id='github'>
        <Grid.Column>
          <Githubs githubs={props.githubs}  editing={props.editing}
            startEdit={props.startEdit}     loggedIn={props.loggedIn}
            shiftOrder={props.shiftOrder}   startNew={props.startNew}
            user={props.currentUser}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row key='jobs' id='jobs'>
        <Grid.Column>
          <Jobs jobs={props.jobs}         editing={props.editing}
            startEdit={props.startEdit}   loggedIn={props.loggedIn}
            shiftOrder={props.shiftOrder} startNew={props.startNew}
            user={props.currentUser}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row key='contact' id='contact'>
        <Grid.Column>
          <Contact user={props.currentUser} editing={props.editing}
            startEdit={props.startEdit}     loggedIn={props.loggedIn}
            text='Contact'
          />
        </Grid.Column>
      </Grid.Row>

    </Grid>
  )
}

export default Content