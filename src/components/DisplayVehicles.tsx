import React, { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import IVehicle from '../model/Vehicle';
import VehicleModalComponent from './modals/VehicleModalComponent';

type VehiclesProps = {
  vehicles: IVehicle[];
};

const DisplayVehicles = ({ vehicles }: VehiclesProps) => {
  const [show, setShow] = useState(false);
  const [currentVehicle, setCurrentVehicle] = useState<IVehicle>();

  const handleClose = () => setShow(false);
  const handleShow = (vehicle: IVehicle) => {
    setCurrentVehicle(vehicle);
    setShow(true);
  }
  return (
    <>
      <Card>
        <Card.Header as="h5">Vehicles</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {vehicles.map((vehicle, index) => (
              <ListGroup.Item key={index} onClick={() => handleShow(vehicle)}>{vehicle.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
      <VehicleModalComponent show={show}
                            vehicle={currentVehicle}
                            handleClose={handleClose}
      />
    </>
  )
}

export default DisplayVehicles
   
