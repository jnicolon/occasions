import React from "react";

//State
import { useState } from "react";
import { useSelector } from "react-redux";

//Components
import { FiUser } from "react-icons/fi";
import BtnTemplate from "../components/navbar/BtnTemplate.js";
import AuthTitle from "../components/auth/AuthTitle";

//Functions
import isEmailValid from "../functions/isEmailValid";

//Firebase
import { useFirebase } from "react-redux-firebase";

//Router
import { Link, Redirect } from "react-router-dom";

function LogIn() {
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [eMailError, setEMailError] = useState("");
  const [logInError, setLogInError] = useState(false);

  const firebase = useFirebase();

  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEMail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (eMail.trim().length < 1 || isEmailValid(eMail) === false) {
      setEMailError(true);
    } else {
      setEMailError(false);
    }

    if (password.trim().length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (!passwordError || !eMailError) {
      firebase
        .auth()
        .signInWithEmailAndPassword(eMail, password)
        .then(() => {
          console.log(eMail, password);
          setLogInError(false);
        })
        .catch((err) => {
          setLogInError(true);
          console.log(err);
        });
    }
  };

  return (
    <>
      <AuthTitle />
      <div className="auth-container">
        {loggedIn && <Redirect to="/userhome" />}
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
              style={logInError ? { opacity: "1" } : { opacity: "0" }}
              className="auth-error-txt"
            >
              User doesn't exist
            </p>
            <div className="auth-input-inner-container auth-bot">
              <BtnTemplate text="Log In" />
            </div>
          </form>
        </div>
        <Link to="/signup">
          <p className="auth-bot-text">Or sign up</p>
        </Link>
      </div>
    </>
  );
}

export default LogIn;
