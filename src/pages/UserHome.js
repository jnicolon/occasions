import React from "react";

import UpNext from "../components/occasions/UpNext";
import OccasionList from "../components/occasions/OccasionList";

function UserHome() {
  return (
    <div className="occ-home-container">
      <UpNext />
      <OccasionList />
    </div>
  );
}

export default UserHome;
