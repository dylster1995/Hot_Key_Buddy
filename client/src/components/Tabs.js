import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Tabs = () => {

return(
  
    <div className='nav-container'>
    <Navbar className='inner-two' bg='light' >
      <Container className='inner'>
        <Navbar.Brand href="/home">H.K.B.</Navbar.Brand>
        <Nav className="justify-content-end"> 
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/keyboard">Stored Keys</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  
);
};

export default Tabs;