import { React } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbar-container">
        <Container>
          <Navbar.Brand href="#home">Tiago Pereira</Navbar.Brand>
          <Nav className="navbar-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Works</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <Button variant="outline-success">Let's talk</Button>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;