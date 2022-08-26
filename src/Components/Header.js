import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function BasicExample() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>A</Navbar.Brand>
          {/* do i want nav center or far right, not sure yet */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;