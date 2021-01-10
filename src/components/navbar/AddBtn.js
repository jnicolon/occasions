import React from "react";

import { MdAddCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function AddBtn() {
  return (
    <Link to="/addoccasion">
      <MdAddCircleOutline className="navbar-icon" />
    </Link>
  );
}

export default AddBtn;
