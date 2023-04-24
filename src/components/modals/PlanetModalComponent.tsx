import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import IPlanet from '../../model/Planet';
import moment from 'moment';

interface Props {
    show: boolean;
    planet: IPlanet | undefined;
    handleClose: () => void;
}

const PlanetModalComponent: React.FC<Props> = ({ show, planet, handleClose  }) => {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{planet?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Rotation Period: {planet?.rotation_period}</p>
          <p>Orbital Period: {planet?.orbital_period}</p>
          <p>Diameter: {planet?.diameter}</p>
          <p>Climate: {planet?.climate}</p>
          <p>Gravity: {planet?.gravity}</p>
          <p>Terrain: {planet?.terrain}</p>
          <p>Surface Water: {planet?.surface_water}</p>
          <p>Population: {planet?.population}</p>
          <p>Created: {moment(planet?.created).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
          <p>Edited: {moment(planet?.edited).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
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

export default PlanetModalComponent;
