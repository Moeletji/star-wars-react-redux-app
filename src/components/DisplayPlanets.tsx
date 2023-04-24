import React, { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import IPlanet from '../model/Planet';
import PlanetModalComponent from './modals/PlanetModalComponent';

type PlanetsProps = {
  planets: IPlanet[];
};

const DisplayPlanets = ({ planets }: PlanetsProps) => {
  const [show, setShow] = useState(false);
  const [currentPlanet, setCurrentPlanet] = useState<IPlanet>();

  const handleClose = () => setShow(false);
  const handleShow = (planet: IPlanet) => {
    setCurrentPlanet(planet);
    setShow(true);
  }

  return (
    <>
      <Card>
        <Card.Header as="h5">Planets</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {planets.map((planet, index) => (
              <ListGroup.Item key={index} onClick={()=> handleShow(planet)}>{planet.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
      <PlanetModalComponent show={show}
                            planet={currentPlanet}
                            handleClose={handleClose}
      />
    </>
  );
};

export default DisplayPlanets;
