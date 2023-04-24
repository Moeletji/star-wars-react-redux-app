import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ISpecies from '../../model/Species';
import moment from 'moment';

interface Props {
    show: boolean;
    species: ISpecies | undefined;
    handleClose: () => void;
}

const SpeciesModalComponent: React.FC<Props> = ({ show, species, handleClose }) => {
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{species?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Classification: {species?.classification}</p>
          <p>Designation: {species?.designation}</p>
          <p>Average Height: {species?.average_height}</p>
          <p>Skin Colors: {species?.skin_colors}</p>
          <p>Hair Colors: {species?.hair_colors}</p>
          <p>Eye Colors: {species?.eye_colors}</p>
          <p>Average Lifespan: {species?.average_lifespan}</p>
          <p>Language: {species?.language}</p>
          <p>Created: {moment(species?.created).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
          <p>Edited: {moment(species?.edited).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
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

export default SpeciesModalComponent;
