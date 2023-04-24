import React, { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import IStarship from '../model/Starship';
import StarshipModalComponent from './modals/StarshipModalComponent';

type StarshipsProps = {
  starships: IStarship[];
};

const DisplayStarships = ({ starships }: StarshipsProps) => {
  const [show, setShow] = useState(false);
  const [currentStarship, setCurrentStarship] = useState<IStarship>();

  const handleClose = () => setShow(false);
  const handleShow = (starship: IStarship) => {
    setCurrentStarship(starship);
    setShow(true);
  }
  return (
    <>
      <Card>
        <Card.Header as="h5">Starships</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {starships.map((starship, index) => (
              <ListGroup.Item key={index} onClick={()=> handleShow(starship)}>{starship.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
      <StarshipModalComponent show={show}
                              starship={currentStarship}
                              handleClose={handleClose}
      />
    </>
  );
};

export default DisplayStarships;
