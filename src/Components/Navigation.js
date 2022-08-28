import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationSetup() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand as={Link} to="/">
            A
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
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
