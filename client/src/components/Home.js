import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Keyboard from "./Keyboard";
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
           Welcome to Hot Key Buddy! Enter the combination of keys you want to save and store them for later.  
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
