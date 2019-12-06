import React from 'react';
import { Card } from "semantic-ui-react";
import Flashcard from './Flashcard';

const Flashcards = ({ flashcards, removeFlashcard, editFlashcard }) => (
        <Card.Group itemsPerRow={4}>
      {
        flashcards.map( flashcard => (
          <Flashcard key={flashcard.id} {...flashcard} removeFlashcard={removeFlashcard} editFlashcard={editFlashcard} />
        ))
      }
    </Card.Group>
  );

export default Flashcards;