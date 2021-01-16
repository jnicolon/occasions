import React from "react";

import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

function ProfileBtn() {
  return (
    <div>
      <Link to="/userhome">
        <FiUser className="navbar-icon" />
      </Link>
    </div>
  );
}

export default ProfileBtn;
