import React from "react";

import UpNext from "../components/occasions/UpNext";
import AddOccasionHome from "../components/occasions/AddOccasionHome.js";
import OccasionList from "../components/occasions/OccasionList";

function UserHome() {
  return (
    <div className="user-home-container">
      <UpNext />
      <AddOccasionHome />
      <OccasionList />
    </div>
  );
}

export default UserHome;
