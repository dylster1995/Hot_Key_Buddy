// import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Auth from '../utils/auth';

const Tabs = () => {

return(
    <>
    <div className='nav-container'>
    <Navbar className='inner-two' bg="light" variant="light">
      <Container className='inner'>
        <Navbar.Brand href="/home">H.K.B.</Navbar.Brand>
        <Nav className="justify-content-end"> 

          <Nav.Link href="/home">Home</Nav.Link>
          { Auth.loggedIn() ? (
            <span>
            <Nav.Link href="/keyboard">Stored Keys</Nav.Link>
            <Nav.Link href={'/' + localStorage.getItem('id')}>User Settings</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </span>
          ) : (
            <span>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </span>
          ) }
        </Nav>
      </Container>
    </Navbar>
    </div>
  </>
);
};

export default Tabs;