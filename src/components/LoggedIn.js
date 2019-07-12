import React from 'react'
import { Grid, Button } from 'semantic-ui-react'

const Login = (props) => {

    return (
    <Grid columns='equal' textAlign='center'>
        <Grid.Row>
            Welcome, {props.username}
        </Grid.Row>
        <Grid.Row>
            <Button size='tiny' onClick={props.logOut} inverted>
                Logout
            </Button>
        </Grid.Row>
    </Grid>
        )
}

export default Login
