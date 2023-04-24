import React, { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import ISpecies from '../model/Species';
import SpeciesModalComponent from './modals/SpeciesModalComponent';

const DisplaySpecies = (props:{ species: ISpecies[] }) => {
  const [show, setShow] = useState(false);
  const [currentSpecies, setCurrentSpecies] = useState<ISpecies>();

  const handleClose = () => setShow(false);
  const handleShow = (species: ISpecies) => {
    setCurrentSpecies(species);
    setShow(true);
  }
  return (
    <>
      <Card>
        <Card.Header as={"h5"}>Species</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {props.species.map((specie, index) => (
              <ListGroup.Item key={index} onClick={() => handleShow(specie)}>{specie.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
      <SpeciesModalComponent show={show}
                            species={currentSpecies}
                            handleClose={handleClose}
      />
    </>
  );
};

export default DisplaySpecies;
