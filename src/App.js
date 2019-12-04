import React from 'react';
import { Container, Header, Button, Icon, Segment } from 'semantic-ui-react';
import Flashcards from './Flashcards';
import FlashcardForm from './FlashcardForm';

class App extends React.Component {
  state = { 
    flashcards: [
      {id: 1, question: "2 + 2", answer: "4" },
      {id: 2, question: "What is the number for 911?", answer: "911" },
      {id: 3, question: "How did Randy Rhoades die?", answer: "Plane Crash" },
      {id: 4, question: "Who started 'That's What She Said?'", answer: "Michael Scott" },
    ],
    showForm: true, 
    showAnswer: true,

  }

  getId = () => {
    return Math.floor((1 + Math.random()) *10000);
  };

  addFlashcard = ({question, answer}) => {
    let flashcard = { id: this.getId(), question, answer };
    this.setState({ flashcards: [flashcard, ...this.state.flashcards], });
  };

  editFlashcard = (newFlashcard) => {
    const flashcards = this.state.flashcards.map( originalFlashcard => {
      if (originalFlashcard.id === newFlashcard.id)
        return newFlashcard;
      return originalFlashcard
    })
    this.setState({ flashcards, })
  }
 
  removeFlashcard = (id) => {
    const flashcards = this.state.flashcards.filter( flashcard => {
      if (flashcard.id !== id)
      return flashcard
    })
    this.setState({ flashcards: [...flashcards], })
  }

  // This is where I tried to create my function to view the answer after clicking
  // viewAnswer = (id) => {
  // toggleAnswer = () => this.setState({ showAnswer: !this.state.showAnswer, })
  // }

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });

  render() {
    const { flashcards, } = this.state
    return(
      <div>
        <Container style={{ paddingTop: "25px" }}>
          <center> <Header size="huge"> React Flash Cards </Header> </center>
          
          <Segment>
            <Button icon color="purple" onClick={this.toggleForm} >
              <Icon name={this.state.showForm ? "angle double up" : "angle double down"} /> 
            </Button>
          {this.state.showForm ? <FlashcardForm addFlashcard={this.addFlashcard} /> : null }
          </Segment>
          <br />
          <Flashcards flashcards={flashcards} removeFlashcard={this.removeFlashcard} />
        </Container>
      </div>
    )
  }
}

export default App;
