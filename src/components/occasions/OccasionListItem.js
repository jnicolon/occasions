import React from "react";
//Router
import { Link } from "react-router-dom";
//Icon
import PresentStatusIcon from "./PresentStatusIcon";
//Sate
import { useDispatch } from "react-redux";
//Actions
import { setCurrentOccasion } from "../../redux/actions/occasionsActions";

function OccasionListItem({ occDate, currentOccasion }) {
  const dispatch = useDispatch();

  //The occasion passed here is the one we are mapping.
  //This way we can track what occasion we are clicking on the list.
  function onClickOccasion(currentOccasion) {
    dispatch(setCurrentOccasion(currentOccasion));
  }

  // //We add the date to currentOccasion for cloud functions functionality.
  // const occDateString = Date.parse(occDate);
  // const currentOccasionWithDate = { ...currentOccasion, occDateString };

  return (
    <Link to={`/occasionpage/${currentOccasion.occasionId}`}>
      <div
        className="occ-list-item-container"
        onClick={onClickOccasion(currentOccasion)}
      >
        <h6 className="occ-list-single-item-container">{`${currentOccasion.occName}`}</h6>
        <h6 className="occ-list-single-item-container">{`${currentOccasion.occasion}`}</h6>
        <h6 className="occ-list-single-item-container">{`${occDate}`}</h6>
        <h6 className="occ-list-single-item-container">
          <PresentStatusIcon presentStatus={currentOccasion.occGift} />
        </h6>
      </div>
    </Link>
  );
}

export default OccasionListItem;
