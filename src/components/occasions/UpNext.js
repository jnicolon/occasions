import React from "react";

import { BsCalendar } from "react-icons/bs";

function UpNext() {
  return (
    <div className="occ-upNext-container">
      <h4 className="occ-upNext-title">Up Next</h4>
      <h2 className="occ-upNext-name">Silvia Marta's Birthday</h2>
      <div className="occ-upNext-center">
        <BsCalendar className="occ-upNext-icon" />
        <div className="occ-upNext-left-container">
          <h6>On December 30th 2021</h6>
          <p>That's 3 months, 26 days from now!</p>
        </div>
      </div>
      <h4 className="occ-upNext-gift-txt">Set up a gift for this occasion.</h4>
    </div>
  );
}

export default UpNext;
