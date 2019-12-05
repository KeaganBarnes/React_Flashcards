import React from 'react';
import EditFlashcardForm from './EditFlashcardForm'; 
import { Card, Button } from 'semantic-ui-react';

class Flashcard extends React.Component {
  state = { editing: false, showAnswer: false}
  toggleAnswer = (id) => this.setState({ showAnswer: !this.state.showAnswer, })

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  render() {
    const { id, question, answer, removeFlashcard, editFlashcard } = this.props;
    const content = this.state.showAnswer ? ( answer ) : null
    // const edit = this.state.editFlashcard 
    return(
      <Card>
        {
          this.state.editing ?
            <EditFlashcardForm question={question} answer={answer} id={id} editFlashcard={editFlashcard} />
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
