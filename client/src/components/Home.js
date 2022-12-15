import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import '../styles/Home.css'
const Home = () => {
  
  return (
    <>
    <body>
      <div className="title">
        <header>Hot Key Buddy</header>
      </div>
      <div className="text">
        <h2>
          Type in the hot keys you'd like to save and they'll display in the
          box bellow!
        </h2>
      </div>
      <div className="screen">
        <p>Display</p>
      </div>
      <div className="keyboard">
        <p>Keyboard</p>
      </div>
      </body>
    </>
  );
};

export default Home;
