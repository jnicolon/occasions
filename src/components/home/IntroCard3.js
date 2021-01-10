import React from "react";

import { RiCalendarCheckLine } from "react-icons/ri";

function IntroCard3() {
  return (
    <div className="home-intro-card-container">
      <RiCalendarCheckLine className="home-intro-icon" />
      <h2 className="home-intro-title">Schedule it!</h2>
      <p className="home-intro-text">
        Never forget your occasions by scheduling your gift in advance and
        recieve and email when it's sent.
      </p>
    </div>
  );
}

export default IntroCard3;
