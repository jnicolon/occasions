import React from "react";
import { Link } from "react-router-dom";
import BtnTemplate from "../../navbar/BtnTemplate";

function addOccSlide5({ slide }) {
  const slideId = 5;

  return (
    <div
      className={
        slideId === slide
          ? "add-occ-container"
          : "add-occ-container add-occ-container-none"
      }
    >
      <h1 className="add-occ-title">
        You've succesfully created a special occasion!
      </h1>
      <h3 className="add-occ-sub-title">
        Got to the event's page to set up a thoughtful present!
      </h3>
      <Link to="/userhome">
        <BtnTemplate text="Go to event's page" />
      </Link>
    </div>
  );
}

export default addOccSlide5;
