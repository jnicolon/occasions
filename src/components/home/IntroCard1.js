import React from "react";

import { RiCake2Line } from "react-icons/ri";

function IntroCard1() {
  return (
    <div className="home-intro-card-container">
      <RiCake2Line className="home-intro-icon" />
      <h2 className="home-intro-title">Create an Occasion</h2>
      <p className="home-intro-text">
        Wheather it's a birthday, and anniversary or graduation, no special
        occasion should be forgotten.
      </p>
    </div>
  );
}

export default IntroCard1;
