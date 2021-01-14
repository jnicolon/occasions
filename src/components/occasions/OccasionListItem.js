import React from "react";

import { Link } from "react-router-dom";

import PresentStatusIcon from "./PresentStatusIcon";

function OccasionListItem() {
  return (
    <Link to="/occasionpage">
      <div className="occ-list-item-container">
        <h6 className="occ-list-single-item-container">Silvia Marta</h6>
        <h6 className="occ-list-single-item-container">Birthday</h6>
        <h6 className="occ-list-single-item-container">December 30th 2021</h6>
        <h6 className="occ-list-single-item-container">
          <PresentStatusIcon />
        </h6>
      </div>
    </Link>
  );
}

export default OccasionListItem;
