import React from 'react';
import { Table } from "semantic-ui-react";
import Flashcard from './Flashcard';

const Flashcards = ({ flashcards, removeFlashcard }) => (
     
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell> Question </Table.HeaderCell>
        <Table.HeaderCell> Answer </Table.HeaderCell>
        <Table.HeaderCell> View Answer </Table.HeaderCell> 
        <Table.HeaderCell> Delete </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    
    <Table.Body>
      {
        flashcards.map( flashcard => (
          <Flashcard key={flashcard.id} {...flashcard} removeFlashcard={removeFlashcard}/>
        ))
      }
    </Table.Body>
  </Table>
)

export default Flashcards;