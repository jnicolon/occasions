import React from "react";

import { BsCalendar } from "react-icons/bs";

function IntroCard3() {
  return (
    <div className="home-intro-card-container">
      <BsCalendar className="home-intro-icon" />
      <h2 className="home-intro-title">Schedule it!</h2>
      <p className="home-intro-text">
        Never forget your occasions by scheduling your gift in advance.
      </p>
    </div>
  );
}

export default IntroCard3;
