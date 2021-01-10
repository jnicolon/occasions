//React
import React from "react";
// import { useState } from "react";

//State
// import { useSelector } from "react-redux";

//Components
import ProfileBtn from "./ProfileBtn";
import CartBtn from "./CartBtn";
import AddBtn from "./AddBtn";

function LeftNavbar() {
  return (
    <div className="left-navbar-container">
      <AddBtn />
      <CartBtn />
      <ProfileBtn />
    </div>
  );
}

export default LeftNavbar;
