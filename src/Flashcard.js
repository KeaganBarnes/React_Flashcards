import React from 'react';
import EditFlashcardForm from './EditFlashcardForm';
import { Card, Button, Icon } from 'semantic-ui-react';

class Flashcard extends React.Component {
  state = { editing: false, showAnswer: false }
  toggleAnswer = (id) => this.setState({ showAnswer: !this.state.showAnswer, })

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  render() {
    const { id, question, answer, removeFlashcard, editFlashcard } = this.props;
    const content = this.state.showAnswer ? (answer) : null
    // const edit = this.state.editFlashcard 
    return (
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
          <center>
            <div class="ui three buttons">
              <Button color="blue" onClick={this.toggleEdit}>
                <center>
                  <Icon name="pencil" />
                </center>
              </Button>
              <Button color="green" onClick={this.toggleAnswer}>
                <center>
                  <Icon name="eye" />
                </center>
              </Button>
              <Button color="red" onClick={() => removeFlashcard(id)}>
                <center>
                  <Icon name="trash" />
                </center>
              </Button >
            </div>
          </center>
        </Card.Content>
      </Card>
    )
  }
}

export default Flashcard;
