import React from 'react'
import {Grid, Icon, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const SectionHeading = (props) => {

  return (
    <Grid>
      <Grid.Row centered>
        <br/>
          <Link to="/#nav"><Icon name="triangle up"/></Link>
        <br/>
      </Grid.Row>
      
      <Grid.Row className={`${props.user.color_theme}-heading`} width={16}>
        <Grid.Column width={10} verticalAlign="middle">
          <span className="font-size-large heading-font">{props.text}</span>
        </Grid.Column>
      
        <Grid.Column width={6} textAlign="right" centered>
          <Button.Group>
            {(props.sectionEdit && props.loggedIn)
              ? (<Button icon centered onClick={props.startEdit}>
                  <Button.Content>
                    <Icon name="edit" />
                  </Button.Content>
                </Button>)
              : null}
            {(props.sectionNew && props.loggedIn)
              ? (<Button icon centered onClick={props.startNew}>
                  <Button.Content>
                    <Icon name="add circle" />
                  </Button.Content>
                </Button>)
              : null}
          </Button.Group>
        </Grid.Column>

      </Grid.Row>
    </Grid>
  )
  }

export default SectionHeading
