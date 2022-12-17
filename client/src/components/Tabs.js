import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Tabs = () => {

return(
    <>
    <div className='nav-container'>
    <Navbar className='inner-two' bg="light" variant="light">
      <Container className='inner'>
        <Navbar.Brand href="/home">H.K.B.</Navbar.Brand>
        <Nav className="justify-content-end"> 
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/home">Stored</Nav.Link>
          <Nav.Link href="/keyboard">Keys</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  </>
);
};

export default Tabs;