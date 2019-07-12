import React from 'react'
import {Form, Header} from 'semantic-ui-react'

class Login extends React.Component {
    state={
        user: '',
        pass: ''
    }
    handleUserChange = (e, {value}) => this.setState({user: value})
    handlePassChange = (e, {value}) => this.setState({pass: value})
    
    render() { 
        return(
            <Form>
                <Header as='h4' color='orange'>
                    {this.props.message}
                </Header>
                <Form.Field>
                    <Form.Input inverted
                        icon='user circle outline'
                        onChange={this.handleUserChange}
                        placeholder='username'
                        value={this.state.user}
                    />
                </Form.Field>

                <Form.Field>
                    <Form.Input inverted
                        type='password'
                        icon='key'
                        onChange={this.handlePassChange}
                        placeholder='password' 
                        value={this.state.pass}
                    />
                </Form.Field>
                <Form.Button inverted
                    onClick={ev => this.props.login(ev, this.state.user, this.state.pass)}
                >Login</Form.Button>
            </Form>
        )
    }
}


export default Login

// <Grid.Row columns={1} >
//                     <Input size= 'mini'
//                     ref={input => inputtext = input}
//                     label={{ icon:'user circle outline' }} 
//                     iconPosition='left' placeholder='username' 
//                     />
//                 </Grid.Row>
//                 <Grid.Row columns={1}>
//                     <Input size= 'mini'
//                     label={{ icon:'key' }} 
//                     iconPosition='left' placeholder='password' 
//                     />
//                 </Grid.Row>
//                 <Grid.Row columns={1}>
//                     <Button inverted
//                     onClick={props.login}
//                     >Login</Button>
//                 </Grid.Row>