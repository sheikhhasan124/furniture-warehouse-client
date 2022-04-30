import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">Furniture Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
      <Nav.Link href="#pricing">Service</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Manage Items</Nav.Link>
      <Nav.Link href="#deets">Add Item</Nav.Link>
      <Nav.Link href="#deets">My Items</Nav.Link>
      <Nav.Link eventKey={2} as={Link} to="/login">Log In</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navber;