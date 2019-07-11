import React from 'react'
import { 
  Form,
  Button,
  Icon,
  Grid,
  Header,
 } from 'semantic-ui-react'

export default class SkillsEdit extends React.Component {

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
            <Header size='large' inverted>
              Edit Skill
            </Header>
            
            <Form.Field>
              <label>Skill</label>
                  <input name="name" value={this.state.content.name} onChange={(ev) => this.handleChange(ev)}/>
            </Form.Field>

            <Form.Field>
              <label>Image URL</label>
                  <input name="img_url" value={this.state.content.img_url} onChange={(ev) => this.handleChange(ev)}/>
            </Form.Field>

            <Form.Field>
              <label>Move skill</label>
                <Button.Group>
                  <Button 
                    onClick={_ => this.props.shiftOrder('skills', this.props.content, false)} 
                    icon={<Icon name="long arrow alternate left" size="large" />}
                    size="large"
                  />
                    
                  <Button 
                    onClick={_ => this.props.shiftOrder('skills', this.props.content, true)} 
                    icon={<Icon name="long arrow alternate right" size="large" />}
                    size="large"
                  />
                </Button.Group>
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
