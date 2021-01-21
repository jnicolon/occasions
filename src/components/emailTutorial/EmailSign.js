import React from "react";
import BtnTemplate from "../navbar/BtnTemplate";
import { Link } from "react-router-dom";

function EmailSign() {
  return (
    <div className="email-sign-container">
      <h3 className="email-sign-title">
        To test the email functionality click
      </h3>
      <Link to="/emailtest">
        <BtnTemplate size="sm" text="here" />
      </Link>
    </div>
  );
}

export default EmailSign;
