import React from "react";
import "aframe";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="content">
        <h1>Welcome to VR CBT Therapy</h1>
        <p>Experience the future of mental health treatment with VR.</p>
        <div className="button-container">
          <Link to="/login">
            <button>Login or Signup</button>
          </Link>
        </div>
      </header>
      <a-scene className="vr-background">
        <a-sky src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"></a-sky>
        <a-entity position="0 1.6 -3">
          <a-camera></a-camera>
        </a-entity>
      </a-scene>
    </div>
  );
};

export default HomePage;
