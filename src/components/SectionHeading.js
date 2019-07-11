import React from 'react'
import {Grid, Icon, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const SectionHeading = (props) => {

  return (
    <Grid>
      <Grid.Row />
      <Grid.Row centered>
        <Link to="/#nav"><Icon name="triangle up"/></Link>
      </Grid.Row>
      
      <Grid.Row className={`${props.user.color_theme}-heading`} width={16}>
        <Grid.Column width={12} verticalAlign="middle">
          <span className="font-size-large font-heading">{props.text}</span>
        </Grid.Column>
      
        <Grid.Column width={4}>
          <Button.Group floated="right">
            {(props.sectionEdit && props.loggedIn)
              ? <Button onClick={props.startEdit} color="linkedin">
                  <Button.Content>
                    <Icon name="edit" fitted/>
                  </Button.Content>
                </Button>
              : null}
            {(props.sectionNew && props.loggedIn)
              ? <Button onClick={props.startNew} color="green">
                  <Button.Content>
                    <Icon name="add circle" fitted/>
                  </Button.Content>
                </Button>
              : null}
          </Button.Group>
        </Grid.Column>

      </Grid.Row>
      <Grid.Row />
      <Grid.Row />
    </Grid>
  )
  }

export default SectionHeading
