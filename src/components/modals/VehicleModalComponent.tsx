import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import IVehicle from '../../model/Vehicle';
import moment from 'moment';

interface Props {
    show: boolean;
    vehicle: IVehicle | undefined;
    handleClose: () => void;
}

const VehicleModalComponent: React.FC<Props> = ({ show, vehicle, handleClose }) => {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{vehicle?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Model: {vehicle?.model}</p>
          <p>Manufacturer: {vehicle?.manufacturer}</p>
          <p>Cost in Credits: {vehicle?.cost_in_credits}</p>
          <p>Length: {vehicle?.length}</p>
          <p>Max Atmosphering Speed: {vehicle?.max_atmosphering_speed}</p>
          <p>Crew: {vehicle?.crew}</p>
          <p>Passengers: {vehicle?.passengers}</p>
          <p>Cargo Capacity: {vehicle?.cargo_capacity}</p>
          <p>Consumables: {vehicle?.consumables}</p>
          <p>Vehicle Class: {vehicle?.vehicle_class}</p>
          <p>Created: {moment(vehicle?.created).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
          <p>Edited: {moment(vehicle?.edited).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
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

export default VehicleModalComponent;
