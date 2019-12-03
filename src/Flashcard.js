import React from 'react';
import { Button, Table } from 'semantic-ui-react';

const Flashcard = ({ id, question, answer, removeFlashcard, }) => (
  <Table.Row>
    <Table.Cell> { question } </Table.Cell>

    <Table.Cell> { answer } </Table.Cell>
    <Table.Cell> 
      <Button color="red" onClick={() => removeFlashcard(id)}>
         Delete
      </Button >
    </Table.Cell>
  </Table.Row>
)

export default Flashcard;