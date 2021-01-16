import React from "react";

import { Link, useLocation } from "react-router-dom";

import LeftNavbar from "./LeftNavbar";

import { useFirestoreConnect } from "react-redux-firebase";

function Navbar() {
  let location = useLocation();

  return (
    <div
      className="navbar"
      style={
        location.pathname === "/" ? { display: "none" } : { display: "block" }
      }
    >
      <div className="navbar-container">
        <Link to="/">
          <h3 className="logo">Occasions</h3>
        </Link>
        <LeftNavbar />
      </div>
    </div>
  );
}

export default Navbar;
