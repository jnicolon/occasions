import React from "react";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleProfileModal } from "../../redux/actions/modalActions";
import LogoutBtn from "./LogoutBtn";

function ProfileBtn() {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.modal.profileBtn);

  return (
    <div className="profile-btn-container">
      <div
        className="icon profile-btn account-icon"
        onClick={() => {
          dispatch(toggleProfileModal(true));
        }}
      >
        <FiUser className="navbar-icon" />
      </div>

      <div
        style={{
          display: display ? "block" : "none",
          opacity: display ? "1" : "0",
        }}
        className="profile-btn-popup"
      >
        <Link to="/userhome">
          <h3 className="profile-btn-popup-txt">Occasion List</h3>
        </Link>
        <Link to="/scheduledpage">
          <h3 className="profile-btn-popup-txt">Scheduled Occasions</h3>
        </Link>
        <Link to="/cartpage">
          <h3 className="profile-btn-popup-txt">Scheduler</h3>
        </Link>
        <LogoutBtn />
      </div>
    </div>
  );
}

export default ProfileBtn;
