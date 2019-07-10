import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

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

  handleChange = (ev, i) => {
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
              <input name="name" value={this.state.content.name} onChange={(ev) => this.handleChange(ev)}/>
            </Form.Field>
            <Form.Field>
              <label>Image URL</label>
              <input name="img_url" value={this.state.content.img_url} onChange={(ev) => this.handleChange(ev)}/>
            </Form.Field>
            <Button type='submit'>Submit</Button>
            <Button negative type='button' onClick={() => this.props.handleDelete(this.state.content)}>Delete</Button>
          </Form>
        )
  }
}
