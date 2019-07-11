import React from 'react'
import {Grid, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const parsePhoneNum = (num) => {
  if (num) {
    return `(${num.slice(0,3)}) ${num.slice(3,6)} ${num.slice(6)}`
  }
}

const Contact = (props) => {

    return (
      <Grid columns={3} stackable centered>
        <Grid.Row />
        <Grid.Row centered>
          <Link to="/#nav"><Icon name="triangle up"/></Link>
        </Grid.Row>
        
        <Grid.Row className={`${props.user.color_theme}-heading`} verticalAlign="middle">
          <Grid.Column verticalAlign="middle">
            <span className="font-size-large font-heading">{props.text}</span>
          </Grid.Column>      

          <Grid.Column className="text" textAlign="center">
            <a href={"mailto:"+props.user.email}>{props.user.email}</a>
          </Grid.Column>

          <Grid.Column className="text" textAlign="center">
            <a href={"tel: +1"+ props.user.phone}>+1 {parsePhoneNum(props.user.phone)}</a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}

export default Contact
