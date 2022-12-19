// import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import "../styles/Home.css";
import Gaming from '../assets/gaming_image_two.jpg';

const Home = () => {
  return (
    <>
      <body>
        <div className="title">
          <header>Hot Key Buddy</header>
        </div>
        <div className="text">
          <h2>
           Welcome to Hot Key Buddy! Enter the combination of keys you want to save and store them for later.  
          </h2>
        </div>
        <div className="home-screen">
        <Card>
        <Card.Img id="image"variant="top" src={Gaming} alt="picture of a keyboard"/>
      </Card>
        </div>
      </body>
    </>
  );
};

export default Home;
