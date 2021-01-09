//React
import React from "react";
import { useState } from "react";

//State
import { useSelector } from "react-redux";

//Components
import LogInBtn from "./LogInBtn";

function LeftNavbar() {
  return (
    <div className="left-navbar-container">
      <LogInBtn />
    </div>
  );
}

export default LeftNavbar;
