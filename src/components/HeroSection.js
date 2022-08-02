import React from "react";
import Button from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  /*<video src="videos/video-2.mp4" autoplay muted />*/
  return (
    <div className="hero-container">
      <h1>Adventure Awaits</h1>
      <p>What Are You Waiting For</p>
      <div className="hero-btn">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER<ion-icon name="play-circle" className="play"></ion-icon>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
