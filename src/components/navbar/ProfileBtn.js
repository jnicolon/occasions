import React from "react";
import { useState } from "react";

import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

// import LogoutBtn from "./LogoutBtn";
// import { useSelector, useDispatch } from "react-redux";

// import { toggleProfileModal } from "../../redux/actions/modalActions";

function ProfileBtn() {
  // const dispatch = useDispatch();
  // const display = useSelector((state) => state.modal.profileBtn);

  const [display, useDisplay] = useState(false);
  return (
    <div className="profile-btn-container">
      <div
        className="icon profile-btn account-icon"
        // onClick={() => {
        //   dispatch(toggleProfileModal(true));
        // }}
      >
        <FiUser size={32} />
      </div>

      <div
        style={{
          display: display ? "block" : "none",
          opacity: display ? "1" : "0",
        }}
        className="profile-btn-popup"
      >
        <Link to="/eventpage">
          <h3 className="profile-btn-popup-txt">Occasion List</h3>
        </Link>
        <Link to="/scheduledpage">
          <h3 className="profile-btn-popup-txt">Scheduled Occasions</h3>
        </Link>
        <Link to="/cartpage">
          <h3 className="profile-btn-popup-txt">Cart</h3>
        </Link>
        {/* <LogoutBtn /> */}
      </div>
    </div>
  );
}

export default ProfileBtn;
