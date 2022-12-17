import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Tabs = () => {

return(
    <>
  

    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Nav className="me-auto"> 
          <Nav.Link href="/login">Login</Nav.Link>
          {/* <Nav.Link href="/home">Saved Keys</Nav.Link> */}
          <Nav.Link href="/keyboard">Keyboard</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);
};

export default Tabs;