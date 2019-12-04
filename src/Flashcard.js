import React from 'react';
import FlashcardForm from './FlashcardForm';
import { Card, Button } from 'semantic-ui-react';

class Flashcard extends React.Component {
  state = { editing: false, showAnswer: false}
  toggleAnswer = (id) => this.setState({ showAnswer: !this.state.showAnswer, })

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  render() {
    const { id, question, answer, removeFlashcard, } = this.props;
    const content = this.state.showAnswer ? ( answer ) : null
    return(
      <Card>
        {
          this.state.editing ?
            <FlashcardForm question={question} answer={answer} id={id} editFlashcard={this.props.editFlashcard} />
            :
            <>
              <Card.Content header={question} />
              <Card.Content description={content} />
            </>
        }
        <Card.Content extra>
          <Button inverted color="green" onClick={this.toggleAnswer}> 
            View Answer
          </Button>
          <Button color="blue" onClick={this.toggleEdit}>
            Edit
          </Button>
          <Button color="red" onClick={() => removeFlashcard(id)}>
            Delete
          </Button >
        </Card.Content>
      </Card>
    )
  }
}

  export default Flashcard;
