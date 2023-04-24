import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import IStarship from '../../model/Starship';
import moment from 'moment';

interface Props {
    show: boolean;
    starship: IStarship | undefined;
    handleClose: () => void;
}

const StarshipModalComponent: React.FC<Props> = ({ show, starship, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{starship?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Model: {starship?.model}</p>
          <p>Manufacturer: {starship?.manufacturer}</p>
          <p>Cost in Credits: {starship?.cost_in_credits}</p>
          <p>Length: {starship?.length}</p>
          <p>Max Atmosphering Speed: {starship?.max_atmosphering_speed}</p>
          <p>Crew: {starship?.crew}</p>
          <p>Passengers: {starship?.passengers}</p>
          <p>Cargo Capacity: {starship?.cargo_capacity}</p>
          <p>Consumables: {starship?.consumables}</p>
          <p>Hyperdrive Rating: {starship?.hyperdrive_rating}</p>
          <p>MGLT: {starship?.MGLT}</p>
          <p>Starship Class: {starship?.starship_class}</p>
          <p>Created: {moment(starship?.created).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
          <p>Edited: {moment(starship?.edited).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
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

export default StarshipModalComponent;
