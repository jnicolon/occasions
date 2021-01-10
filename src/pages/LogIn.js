import React from "react";

//State
import { useState } from "react";

//Icon
import { FiUser } from "react-icons/fi";

//Components
import BtnTemplate from "../components/navbar/BtnTemplate.js";

function LogIn() {
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [eMailError, setEMailError] = useState(false);
  // const [logInError, setLogInError] = useState(false);

  // const firebase = useFirebase();

  // const loggedIn = useSelector((state) => state.auth.loggedIn);

  const handleChange = (e) => {
    switch (e.target.type) {
      case "password":
        setPasswordError(false);
        setPassword(e.target.value);
        break;
      case "email":
        setEMailError(false);
        setEMail(e.target.value);
        break;
      default:
        break;
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!reg.test(eMail)) {
      setEMailError(true);
    }
    if (password.trim().length < 5) {
      setPasswordError(true);
    }
    if (!passwordError && !eMailError) {
      console.log("submited");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-input-container">
        <div className="auth-title-container">
          <FiUser className="auth-icon" />
          <h1 className="auth-title">Log In</h1>
        </div>
        <form className="auth-form">
          <div className="auth-input-inner-container">
            <label>E-mail</label>
            <input
              onChange={handleChange}
              className="auth-text-input"
              type="email"
              value={eMail}
            ></input>
            <p
              style={eMailError ? { opacity: "1" } : { opacity: "0" }}
              className="auth-error-txt"
            >
              You must enter a valid e-mail
            </p>
          </div>
          <div className="auth-input-inner-container">
            <label>Password</label>
            <input
              onChange={handleChange}
              className="auth-text-input"
              type="password"
              value={password}
            ></input>
            <p
              style={passwordError ? { opacity: "1" } : { opacity: "0" }}
              className="auth-error-txt"
            >
              Your password must be at least six characters long
            </p>
          </div>
          <p
            style={{ opacity: "1" }}
            // style={loginError ? { opacity: "1" } : { opacity: "0" }}
            className="auth-error-txt"
          >
            User doesn't exist
          </p>
          <div className="auth-input-inner-container auth-bot">
            <BtnTemplate func={submitForm} text="Log In" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
