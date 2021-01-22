import React, { useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { Link } from "react-router-dom";

function EmailTest() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="email-container">
      <h4 className="occ-upNext-title">Email Test</h4>
      <h2 className="occ-upNext-name">How the email functionality works:</h2>
      <div className="occ-upNext-center">
        <div
          style={{ textAlign: "center" }}
          className="occ-upNext-left-container"
        >
          <h7 className="email-txt">
            To send the emails on the approriate dates, I set up a cron job
            using firebase functions and google scheduler that checks if any of
            the dates of the scheduled occasions of all users has a card set up
            with the same date as today.
          </h7>
          <h7 className="email-txt">
            Then I extract the relevant data from the scheduled occasion and I
            use nodemailer to send it.
          </h7>
          <h7 className="email-txt">To test the functionality:</h7>
          <h7 className="email-txt">
            * Create one or more occasions with the date January 1st 2022
          </h7>
          <h7 className="email-txt">
            * Set it up whith an email you can easily check
          </h7>
          <h7 className="email-txt">
            * Come back to this page and click on the button bellow to manually
            trigger the function
          </h7>
        </div>
      </div>
      <div>
        <a href="https://us-central1-thoughtfulv3.cloudfunctions.net/sendScheduledMail">
          <BiMailSend className="email-icon" />
        </a>

        <h7 className="email-txt">Loading...</h7>
      </div>
    </div>
  );
}

export default EmailTest;
