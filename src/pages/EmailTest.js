import React, { useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { useFirebase } from "react-redux-firebase";

function EmailTest() {
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const firebase = useFirebase();

  const handleClick = () => {
    setIsLoading(true);
    setMsg("");
    const clickToSendMail = firebase
      .functions()
      .httpsCallable("clickToSendMail");

    clickToSendMail()
      .then((res) => {
        setIsLoading(false);
        setMsg("Check your email!");
      })
      .catch((err) => {
        setIsLoading(false);
        setMsg("Something went wrong");
      });
  };

  return (
    <div className="email-container">
      <h4 className="occ-upNext-title">Email Test</h4>
      <h2 className="occ-upNext-name">How the email functionality works:</h2>
      <div className="occ-upNext-center">
        <div
          style={{ textAlign: "center" }}
          className="occ-upNext-left-container"
        >
          <h6 className="email-txt">
            To send the emails on the approriate dates, I set up a cron job
            using firebase functions and google scheduler that checks if any of
            the dates of the scheduled occasions of all users has a card set up
            with the same date as today.
          </h6>
          <h6 className="email-txt">
            Then I extract the relevant data from the scheduled occasion and I
            use nodemailer to send it.
          </h6>
          <h6 className="email-txt">To test the functionality:</h6>
          <h6 className="email-txt">
            * Create one or more occasions with the date January 1st 2022
          </h6>
          <h6 className="email-txt">
            * Set it up with an email you can easily check
          </h6>
          <h6 className="email-txt">
            * Come back to this page and click on the button bellow to manually
            trigger the function
          </h6>
        </div>
      </div>
      {!isLoading ? (
        <div onClick={handleClick}>
          <BiMailSend className="email-icon" />
        </div>
      ) : (
        <div>
          <p style={{ fontSize: "16px" }} className="email-icon">
            Loading...
          </p>
        </div>
      )}
      {msg === "" ? null : <p>{msg}</p>}
    </div>
  );
}

export default EmailTest;
