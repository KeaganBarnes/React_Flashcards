import React from 'react';
import { Form, } from "semantic-ui-react";

class FlashcardForm extends React.Component {
  state = { 
    question: "", 
    answer: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addFlashcard(this.state);
    this.setState({ question: "", answer: "", })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }

  render() {
    const { question, answer } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          fluid
          required
          label="Question"
          placeholder="Type The Question Here..."
          name="question"
          value={question}
          onChange={this.handleChange}
        />
        <Form.Input
          fluid
          required
          label="Answer"
          placeholder="Type The Answer Here..."
          name="answer"
          value={answer}
          onChange={this.handleChange}
        />
      <Form.Button color="green"> Submit </Form.Button>
    </Form>
    )
  }
}

export default FlashcardForm;