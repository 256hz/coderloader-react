import React from 'react'
import { Link } from 'react-router-dom'
import {Grid, Icon} from "semantic-ui-react"

const Nav = (props) => {
    return (
        <Grid>
            <Grid.Column textAlign="right">
                <Link className="item" to="/" onClick={props.toggleSidebar}><Icon color="grey" name="bars" size="large"/></Link>
            </Grid.Column>
        </Grid>
    )
}


export default Nav
