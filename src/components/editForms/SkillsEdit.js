import React, { Component } from 'react'
import { Form, Button, Icon, Grid } from 'semantic-ui-react'

export default class SkillsEdit extends Component {

  constructor(props){
    super(props)
    this.state = {
      content:{
        id: -1
      }
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.content.id !== state.content.id) {
      return {content: props.content}
    }
  }

  handleChange = (ev) => {
    let contentCopy = this.state.content
    contentCopy = {
      ...contentCopy,
      [ev.target.name]: ev.target.value
    }
    this.setState({
      content: contentCopy
    })
  }

  render(){
    return(
          <Form inverted onSubmit={() => this.props.handleSubmit(this.state.content)}>
            <Form.Field>
              <label>Skill</label>
              <Grid centered>
                <Grid.Row>
                  <input name="name" value={this.state.content.name} onChange={(ev) => this.handleChange(ev)}/>
                </Grid.Row>
              </Grid>
            </Form.Field>

            <Form.Field>
              <label>Image URL</label>
              <Grid centered>
                <Grid.Row>
                  <input name="img_url" value={this.state.content.img_url} onChange={(ev) => this.handleChange(ev)}/>
                </Grid.Row>
              </Grid>
            </Form.Field>

            <Form.Field>
              <label>Move skill</label>
              <Grid centered>
                <Grid.Row>
                <Button.Group>
                  <Button 
                    type="button" 
                    onClick={_ => this.props.shiftOrder('skills', this.props.content, false)} 
                    icon
                    size="large"
                  >
                    <Icon name="long arrow alternate left" size="large" />
                  </Button>
                  
                  <Button 
                    type="button" 
                    onClick={_ => this.props.shiftOrder('skills', this.props.content, true)} 
                    icon
                    size="large"
                  >
                    <Icon name="long arrow alternate right" size="large" />
                  </Button>
                </Button.Group>
                </Grid.Row>
              </Grid>
            </Form.Field>

            <Form.Field>
              <Grid centered>
                <Grid.Row>
                <Button type='submit' color="linkedin">
                  Submit
                </Button>
                <Button negative onClick={() => this.props.handleDelete(this.state.content)}>
                  Delete
                </Button>
                </Grid.Row>
              </Grid>
            </Form.Field>

          </Form>
        )
  }
}
