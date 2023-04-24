import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ICharacter from '../../model/Character';
import moment from 'moment';

interface Props {
  show: boolean;
  person: ICharacter | undefined;
  handleClose: () => void;
}

const CharacterModalComponent: React.FC<Props> = ({ show, person, handleClose }) => {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{person?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Height: {person?.height}</p>
          <p>Mass: {person?.mass}</p>
          <p>Hair Color: {person?.hair_color}</p>
          <p>Skin Color: {person?.skin_color}</p>
          <p>Eye Color: {person?.eye_color}</p>
          <p>Birth Year: {person?.birth_year}</p>
          <p>Gender: {person?.gender}</p>
          <p>Created: {moment(person?.created).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
          <p>Edited: {moment(person?.edited).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CharacterModalComponent;
