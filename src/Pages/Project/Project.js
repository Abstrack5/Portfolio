import React, { useState } from "react";
import "./Project.css";
import projectData from "../../utils/projectData";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Project() {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ProjectDataModal = (data) => {
    return (
      <Modal show={show} onHide={handleClose} centered size="md">
        <Modal.Header closeButton>
          <Modal.Title className="text-center">{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data.description}
          <p className="mt-2">
            <strong>Technologies: </strong>
            {data.technologies}
          </p>
        </Modal.Body>
        <Button
          href={data.github}
          target="_blank"
          rel="noreferrer"
          className="mx-5 mb-2"
          variant="info"
        >
          GitHub
        </Button>
        <Button
          href={data.website}
          target="_blank"
          rel="noreferrer"
          className="mx-5"
          variant="dark"
        >
          Website
        </Button>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const ProjectDataMapped = projectData.map((e, index) => {
    return (
      <Card
        key={index}
        id="cardContainer"
        className="d-flex justify-content-center align-items-center mb-5"
        
      >
        <Card.Header>{e.title}</Card.Header>
        {/* <Card.Body> */}
        <Card.Img
          src={e.image}
          className="CardImage"
          onClick={() => {
            setModalData({
              title: e.title,
              description: e.description,
              github: e.github,
              website: e.website,
              technologies: e.technologies,
            });
            {
              handleShow();
            }
          }}
        />
        {ProjectDataModal(modalData)}
        {/* </Card.Body> */}
      </Card>
    );
  });

  return (
    <div className="portfolioMainContainer">
      <h1 className="text-center">&lt;My projects /&gt;</h1>
      <Container style={{ padding: "2rem 2rem" }}>
        <Row>{ProjectDataMapped}</Row>
      </Container>
    </div>
  );
}

export default Project;
