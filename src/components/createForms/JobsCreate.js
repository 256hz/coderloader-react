import React, { Component } from 'react'
import { Form, 
  Button, 
  Divider, 
  Input, 
  Icon
  } from 'semantic-ui-react'

import Months from '../Months'

const INITIALSTATE = {
  content:{
    company: '',
    title: '',
    summary: '',
    start_month: '',
    start_year: '',
    end_month: 'jan',
    end_year: '',
    responsibilities: [''],
    skills_used: [''],
    img_url: ''
  }
}

export default class JobsCreate extends Component {

  constructor(props){
    super(props)
    this.state = INITIALSTATE
  }

  handleChange = (ev) => {
    this.setState({
      content:{
        ...this.state.content,
        [ev.target.name]: ev.target.value
      }
    })
  }

  handleNested = (category, action, index) => {
    let categoryCopy = this.state.content[category]
    action === 'add'
      ? categoryCopy.push('')
      : categoryCopy.splice(index, 1)
    this.setState({
      content: {
        ...this.state.content,
        [category]: categoryCopy
      }
    })
  }

  handleNestedChange = (ev, i) => {
    let copy = this.state.content[ev.target.name]
    copy[i] = ev.target.value
    this.setState({
      content:{
        ...this.state.content,
        [ev.target.name]: copy
      }
    })
  } 

  handleCreate = () => {
    this.props.handleCreate(this.state.content)
    this.setState({
      content: {
        ...INITIALSTATE.content,
        responsibilities: [''],
        skills_used: ['']
      }
    })
  }

  render(){
    let category = 'skills_used'
    return(
      <Form inverted onSubmit={() => this.handleCreate(this.state.content)}>
        <Form.Field>
          <label>Company</label>
          <input name='company' value={this.state.content.company} onChange={this.handleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Title</label>
          <input name='title' value={this.state.content.title} onChange={this.handleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Summary</label>
          <input name='summary' value={this.state.content.summary} onChange={this.handleChange}/>
        </Form.Field>

        <Form.Group>
          <Form.Field>
            <label>Start Month</label>
            <select name='start_month' 
              value={this.state.content.start_month} 
              onChange={this.handleChange}
              size='large'
              >
              <Months />
            </select>
          </Form.Field>
          
          <Form.Field>
            <label>Start Year</label>
            <input name='start_year'
              onChange={this.handleChange}
              step='1' 
              type='number' 
              value={this.state.content.start_year} 
              />
          </Form.Field>
        </Form.Group>

        <Form.Group>
          <Form.Field>
            <label>End Month</label>
            <select name='end_month' value={this.state.content.end_month} onChange={this.handleChange}>
              <Months />
            </select>
          </Form.Field>

          <Form.Field>
            <label>End Year</label>
            <input type='number' name='end_year' step='1' value={this.state.content.end_year} onChange={this.handleChange}/>
          </Form.Field>
        </Form.Group>

        <Divider />

        <Form.Field>
          <label>Responsibilities</label>
          {this.state.content.responsibilities.map( (res, i) => {
            return (
              <Form.Field key={'create_res_field_' + i}>
                <Input name='responsibilities'
                  key={'create_res_input_'+i} 
                  value={res} 
                  onChange={ ev => this.handleNestedChange(ev, i)}
                  action={{
                    type: 'button',
                    onClick: _ => this.handleNested('responsibilities', 'remove', i), 
                    color: 'red', 
                    icon: 'remove',
                    }}
                />
              </Form.Field>
            )
          })}
          
          <Button 
            onClick={_ => this.handleNested('responsibilities', 'add')} 
            color='green'
            type='button'
            >
            <Icon name='add circle' />
            Add New Responsibility
          </Button>
              
        </Form.Field>

        <Divider />
          
        <Form.Field>
          <label>Skills Used</label>
          {this.state.content.skills_used.map((skill, i) => {
            return (
              <Form.Field key={'create_skill_field_'+i}>
                <Input name={category}
                  key={'create_skill_input'+i}
                  value={skill} 
                  onChange={(ev) => this.handleNestedChange(ev, i)}
                  action={{
                    type: 'button', 
                    onClick: _ => this.handleNested('skills_used', 'remove', i), 
                    icon: 'delete', 
                    color: 'red', 
                    }}
                />
              </Form.Field>
            )
          })}
          <Button 
            onClick={_ => this.handleNested('skills_used', 'add')} 
            color='green'
            type='button'
          >
            <Icon name='add circle' />
            Add New Skill
          </Button>
        </Form.Field>

        <Divider />

        <Form.Field>
          <label>Image URL</label>
          <input name='img_url' value={this.state.content.img_url} onChange={this.handleChange}/>
        </Form.Field>

        <Button type='submit' color='linkedin'>
          Submit
        </Button>
        <Button negative type='button' onClick={() => this.props.handleDelete(this.state.content)}>
          Delete
        </Button>
      </Form>
    )
  }
}
