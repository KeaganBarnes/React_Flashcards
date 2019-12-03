import React from 'react';
import { Form, } from "semantic-ui-react";

class FlashcardForm extends React.Component {
  state = { question: "", answer: "",};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ question: "", answer: "", })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value,
})
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          fluid
          label="Question"
          placeholder="Type Your Question Here..."
          name="question"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Form.Input
          fluid
          label="Answer"
          placeholder="Type The Answer Here..."
          name="answer"
          value={this.state.name}
          onChange={this.handleChange}
        />
      <Form.Button color="green"> Submit </Form.Button>
    </Form>
    )
  }
}

export default FlashcardForm;