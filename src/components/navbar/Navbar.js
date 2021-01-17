import React from "react";

import { Link } from "react-router-dom";

import LeftNavbar from "./LeftNavbar";

import { useSelector } from "react-redux";

function Navbar() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <div
      className="navbar"
      style={!loggedIn ? { opacity: "none" } : { display: "block" }}
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
