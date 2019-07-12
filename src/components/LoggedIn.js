import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const Login = (props) => {

    return (
    <Form.Group>
        <Form.Field>
            Welcome, {props.username} 
        </Form.Field>
        <Form.Field>
            {' '}<br />
        </Form.Field>
        <Form.Field>
            <Button size='tiny' onClick={props.logOut} inverted>
                Logout
            </Button>
        </Form.Field>
    </Form.Group>
        )
}

export default Login
