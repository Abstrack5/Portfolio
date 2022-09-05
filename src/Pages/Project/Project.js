import React from "react";
import "./Project.css";
import projectData from "../../utils/projectData";

import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function Project() {

  const projectsMap = projectData.map((data, index) => {
    return (
      <Card key={index} id="cardContainer" className='d-flex justify-content-center align-items-center'>
        <Image src={data.image}/>
      </Card>
    );
  });

  return (
    <div className="portfolioMainContainer">
      <h1 className="text-center">Projects</h1>
      <Container style={{ padding: '2rem 0' }} >
        <Row>
          {projectsMap}
        </Row>
      </Container>
    </div>
  );
}

export default Project;
