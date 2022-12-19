// import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Gamer from '../assets/gaming_two.jpg'
import Gaming from '../assets/gaming_image_two.jpg';
import Over from '../assets/game_over.jpg';
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <body>
        <div className="title">
          <header>Hot Key Buddy</header>
        </div>
        <div className="text">
          <h2>
            Welcome to Hot Key Buddy! Enter the combination of keys you want to
            save and store them for later.
          </h2>
        </div>
        {/* <div className="home-screen">
          <Container fluid>
            <img
              id="gamer"
              src={Gamer}
              className="img-fluid"
              alt="image of a gamer"
            />
          </Container>
        
          <Container fluid>
            <img
              id="keyboard"
              src={Gaming}
              className="img-fluid"
              alt="image of a keyboard"
            />
          </Container>


        <Container fluid>
            <img
              id="over"
              src={Over}
              className="img-fluid"
              alt="image that reads game over"
            />
          </Container> */}
        {/* </div> */}
        <div style={{ display: 'flex', width: 1000, padding: 20 }}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={Gamer} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Gaming} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Over} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </body>
    </>
  );
};

export default Home;
