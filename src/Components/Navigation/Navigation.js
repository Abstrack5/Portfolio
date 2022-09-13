import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationSetup() {
  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark"  expand="lg" style={{zIndex:1}}>
        <Container>
          <Navbar.Brand eventkey="1" as={Link} to="/">
            Armon Ahmadi
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav >
              <Nav.Link eventkey="2" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link eventkey="3" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link eventkey="4" as={Link} to="/resume">
                Resume
              </Nav.Link>
              <Nav.Link eventkey="5" as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link eventkey="6"as={Link} to="/contact">
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
