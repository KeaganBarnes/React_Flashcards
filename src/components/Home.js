import React from 'react';
import { Container, Header, Button, Icon, Segment } from 'semantic-ui-react';
import Flashcards from '../Flashcards';
import FlashcardForm from '../FlashcardForm';

class Home extends React.Component {
  state = { 
    flashcards: [
      {id: 1, question: "2 + 2", answer: "4" },
      {id: 2, question: "What is the number for 911?", answer: "911" },
      {id: 3, question: "How did Randy Rhoades die?", answer: "Plane Crash" },
      {id: 4, question: "Who started 'That's What She Said?'", answer: "Michael Scott" },
      {id: 5, question: "Who's a good boy?", answer: "Jeebus" },
      {id: 6, question: "Who is the lead singer for Led Zeppelin", answer: "Robert Plant" },
      {id: 7, question: "Who is the Prince of Darkness", answer: "Ozzy Osbourne" },
      {id: 8, question: "Is it time for bed?", answer: "Yes" },

      
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

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });

  render() {
    const { flashcards, } = this.state
    return(
      
      <div>

        <Container style={{ paddingTop: "25px" }}>
          <center> <Header size="huge"> React Flash Cards </Header> </center>
          
          <Segment>
            <Button icon color="linkedin" onClick={this.toggleForm} >
              <Icon name={this.state.showForm ? "angle double up" : "angle double down"} /> 
            </Button>
          {this.state.showForm ? <FlashcardForm addFlashcard={this.addFlashcard} /> : null }
          </Segment>
          <br />
          <Flashcards flashcards={flashcards} removeFlashcard={this.removeFlashcard} editFlashcard={this.editFlashcard} />
        </Container>
      </div>
    )
  }
}

export default Home;