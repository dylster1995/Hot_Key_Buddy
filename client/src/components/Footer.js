import Card from 'react-bootstrap/Card'



const Footer = () => {
  return (
    <>
      <Card >
        <Card.Body>
          <Card.Text>
            Find our repository here on GitHub:
            <Card.Link href="https://github.com/dylster1995/Hot_Key_Buddy">GitHub</Card.Link>
          </Card.Text>
        </Card.Body>
      </Card>
   </>
  );
}


export default Footer;