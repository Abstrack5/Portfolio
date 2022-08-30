import React from "react";
import './Project.css';

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Project() {
  return (
    <>
      <h1 className="text-center">Projects</h1>
      <div className="d-flex justify-content-center">
        <Row xs={1} md={3} lg={2} className="g-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
              <Card className="card">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Project;
