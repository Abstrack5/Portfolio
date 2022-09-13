import React, { useState } from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationSetup() {

  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar expanded={expanded} bg="dark" variant="dark"  expand="lg" style={{zIndex:1}}>
        <Container>
          <Navbar.Brand  as={Link} to="/">
            Armon Ahmadi
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav >
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/resume">
                Resume
              </Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationSetup;
