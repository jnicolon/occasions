import React from "react";

import { AiOutlineGift } from "react-icons/ai";

function IntroCard2() {
  return (
    <div className="home-intro-card-container">
      <AiOutlineGift className="home-intro-icon" />
      <h2 className="home-intro-title">Choose a gift</h2>
      <p className="home-intro-text">
        No matter what you want to say, you'll find the right gift for the right
        person.
      </p>
    </div>
  );
}

export default IntroCard2;
