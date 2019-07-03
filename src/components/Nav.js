import React from 'react'
import { Link } from 'react-router-dom'
import {Grid, Icon} from "semantic-ui-react"

const Nav = (props) => {
    // let links = ["skills", "jobs", "githubs", "contact"]
    return (
        <div textAlign="right">
            <Link className="item" to="/" onClick={props.openSidebar}><Icon name="bars"/></Link>
        </div>
    )
}


export default Nav
