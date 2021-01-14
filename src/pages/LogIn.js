import React from "react";

//State
import { useState } from "react";

//Icon
import { FiUser } from "react-icons/fi";

//Components
import BtnTemplate from "../components/navbar/BtnTemplate.js";

//Functions
import isEmailValid from "../functions/isEmailValid";

function LogIn() {
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [eMailError, setEMailError] = useState("");
  // const [logInError, setLogInError] = useState(false);

  // const firebase = useFirebase();

  // const loggedIn = useSelector((state) => state.auth.loggedIn);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "password":
        setPassword(e.target.value);
        if (password.trim().length < 6) {
          setPasswordError(true);
        } else {
          setPasswordError(false);
        }
        break;
      case "email":
        setEMail(e.target.value);
        setEMailError(isEmailValid(e.target.value));
        // const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        // if (!reg.test(eMail)) {
        //   setEMailError(true);
        // } else {
        //   setEMailError(false);
        // }
        break;
      default:
        break;
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
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
        <form onSubmit={submitForm} className="auth-form">
          <div className="auth-input-inner-container">
            <label>E-mail</label>
            <input
              onChange={handleChange}
              className="auth-text-input"
              name="email"
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
              name="password"
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
            <BtnTemplate text="Log In" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
