import { signOut } from 'firebase/auth';
import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../_firebase_init';

const Navber = () => {
  const [user]= useAuthState(auth)
  const handleSignOut =()=>{
    signOut(auth)
  }
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
      {user &&
            <>
              <Nav.Link as={Link} to="/manageStock">Manage Items</Nav.Link>
              <Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>
              <Nav.Link as={Link} to="/myItem">My Items</Nav.Link>
            </>
       }
      {
        user?
        <Nav.Link eventKey={2} onClick={handleSignOut} >Sign out</Nav.Link>

         :
        <Nav.Link eventKey={2} as={Link} to="/login">Log In</Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navber;