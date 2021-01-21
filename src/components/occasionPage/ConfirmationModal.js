import React from "react";
//Router
import { Link } from "react-router-dom";
//Component
import BtnTemplate from "../navbar/BtnTemplate";

function ConfirmationModal({ modalStatus, yesFunction, noFunction }) {
  return (
    <div
      style={{
        display: modalStatus ? "block" : "none",
        opacity: modalStatus ? "1" : "0",
      }}
      className="occasion-page-okGift-modal"
    >
      <div className="occasion-page-okGift-modal-container">
        <h1 className="occasion-page-okGift-modal-title">
          Are you sure you want to unschedule this card?
        </h1>
        <div>
          <Link to="/userhome">
            <BtnTemplate onClick={() => yesFunction()} size="sm" text="yes" />
          </Link>
          <BtnTemplate onClick={() => noFunction(false)} size="sm" text="no" />
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
