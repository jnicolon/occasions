import React from "react";
import { Link } from "react-router-dom";
import BtnTemplate from "../navbar/BtnTemplate";

function GiftNotOk({ occasionId }) {
  return (
    <div className="occasion-page-btn-container">
      <h1>You have not set a card for this special occasion!</h1>
      <div className="occasion-page-options">
        <Link to={`/giftspage/${occasionId}`}>
          <BtnTemplate text="Choose a card" />
        </Link>
      </div>
    </div>
  );
}

export default GiftNotOk;
