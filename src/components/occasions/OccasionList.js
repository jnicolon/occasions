import React from "react";

import OccasionListBtns from "./OccasionListBtns";
import OccasionListItem from "./OccasionListItem";

function OccasionList() {
  return (
    <div className="occ-list-container">
      <div className="occ-list-title-container">
        <h2>Your upcoming occasions</h2>
        <OccasionListBtns />
        <OccasionListItem />
        <OccasionListItem />
        <OccasionListItem />
      </div>
    </div>
  );
}

export default OccasionList;
