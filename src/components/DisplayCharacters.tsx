import React, { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import ICharacter from '../model/Character';
import CharacterModalComponent from './modals/CharacterModalCompoent';

type CharactersProps = {
  characters: ICharacter[];
};

const DisplayCharacters = ({ characters }: CharactersProps) => {
  const [show, setShow] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState<ICharacter>();

  const handleClose = () => setShow(false);
  const handleShow = (character: ICharacter) => {
    setCurrentCharacter(character);
    setShow(true);
  }

  return (
    <>
      <Card>
        <Card.Header as="h5">Characters</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {characters.map((character, index) => (
              <>
                <ListGroup.Item key={index} onClick={() => handleShow(character)}>{character.name}</ListGroup.Item>
              </>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
      <CharacterModalComponent show={show}
                              person={currentCharacter}
                              handleClose={handleClose}
      />
    </>
  );
};

export default DisplayCharacters;
