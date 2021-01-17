import React from "react";

//State
import { useState } from "react";
import { useSelector } from "react-redux";

//Components
import BtnTemplate from "../components/navbar/BtnTemplate.js";
import { FiUser } from "react-icons/fi";
import AuthTitle from "../components/auth/AuthTitle";

//Functions
import isEmailValid from "../functions/isEmailValid";

//Firebase
import { useFirestore, useFirebase } from "react-redux-firebase";

//Router
import { Link, Redirect } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [eMailError, setEMailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const firebase = useFirebase();
  const firestore = useFirestore();

  const handleChange = (e) => {
    console.log(e.target.value.trim().length, e.target.name);
    switch (e.target.name) {
      case "firstName":
        setFirstName(e.target.value);
        if (firstName.trim().length < 3) {
          setFirstNameError(true);
        } else {
          setFirstNameError(false);
        }
        break;
      case "lastName":
        setLastName(e.target.value);
        if (lastName.trim().length < 3) {
          setLastNameError(true);
        } else {
          setLastNameError(false);
        }
        break;
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
        break;
      default:
        break;
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (
      firstNameError === false &&
      lastNameError === false &&
      eMailError === false &&
      passwordError === false
    ) {
      console.log(firstName, lastName, eMail, password);
    }

    if (!eMailError && !passwordError) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(eMail, password)
        .then((resp) => {
          return firestore.collection("users").doc(resp.user.uid).set({
            firstName,
            lastName,
            eMail,
          });
        })
        .catch((err) => {
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
            <h1 className="auth-title">Sign Up</h1>
          </div>
          <form onSubmit={submitForm} className="auth-form">
            <div className="auth-input-inner-container">
              <label>First Name</label>
              <input
                onChange={handleChange}
                className="auth-text-input"
                type="text"
                name="firstName"
                value={firstName}
              ></input>
              <p
                style={firstNameError ? { opacity: "1" } : { opacity: "0" }}
                className="auth-error-txt"
              >
                Name must be at least 3 letters
              </p>
            </div>
            <div className="auth-input-inner-container">
              <label>Last Name</label>
              <input
                onChange={handleChange}
                className="auth-text-input"
                name="lastName"
                type="text"
                value={lastName}
              ></input>
              <p
                style={lastNameError ? { opacity: "1" } : { opacity: "0" }}
                className="auth-error-txt"
              >
                Last name must be at least 3 letters
              </p>
            </div>
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

            <div className="auth-input-inner-container auth-bot">
              <BtnTemplate text="Sign Up" />
            </div>
          </form>
        </div>
        <Link to="/login">
          <p className="auth-bot-text">Or Log In</p>
        </Link>
      </div>
    </>
  );
}

export default SignUp;
