import React from "react";
import { Link } from "react-router-dom";

import LeftNavbar from "./LeftNavbar";

function Navbar() {
  return (
    <div className="navbar">
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
