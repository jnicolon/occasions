import React from "react";
import { useState } from "react";

//Icon
import { FiUser } from "react-icons/fi";

//Components
import BtnTemplate from "../components/navbar/BtnTemplate.js";

// import { useFirestore, useFirebase } from "react-redux-firebase";
// import { useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [eMailError, setEMailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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
        const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!reg.test(eMail)) {
          setEMailError(true);
        } else {
          setEMailError(false);
        }
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

    // if (!reg.test(eMail)) {
    //   setEMailError(true);
    // } else if (!passwordError) {
    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(eMail, password)
    //     .then((resp) => {
    //       return firestore.collection("users").doc(resp.user.uid).set({
    //         firstName,
    //         lastName,
    //         dob,
    //         eMail,
    //       });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
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

export default SignUp;
