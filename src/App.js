import React from 'react';
import './App.css';
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

  }

  getId = () => {
    return Math.floor((1 + Math.random()) *10000);
  };

  addFlashcard = ({question, answer}) => {
    let flashcard = { id: this.getId(), question, answer };
    this.setState({ flashcards: [flashcard, ...this.state.flashcards], })
  }

  removeFlashcard = (id) => {
    const flashcards = this.state.flashcards.filter( flashcard => {
      if (flashcard.id !== id)
      return flashcard
    })
    this.setState({ flashcards: [...flashcards], })
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });

  render() {
    const { flashcards, } = this.state
    return(
      <div>
        <Container style={{ paddingTop: "25px" }}>
          <Header> React Flash Cards </Header>
          <br />
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
