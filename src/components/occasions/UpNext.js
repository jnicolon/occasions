import React from "react";
//Custom Hook
import useUpNext from "../../hooks/useUpNext";
//Icon
import { BsCalendar } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
//Moment
import moment from "moment";
// //Router
import { Link } from "react-router-dom";
//Redux
import { useDispatch } from "react-redux";
import { setCurrentOccasion } from "../../redux/actions/occasionsActions";

function UpNext() {
  const upNext = useUpNext();

  const dispatch = useDispatch();

  //The occasion passed here is the one we are mapping.
  //This way we can track what occasion we are clicking on the list.
  function onClickOccasion(occasion) {
    dispatch(setCurrentOccasion(occasion));
  }

  //We add the date to currentOccasion for cloud functions functionality.
  const occDateString = Date.parse(upNext);
  const currentOccasionWithDate = { ...upNext, occDateString };

  return (
    <div className="occ-upNext-container">
      {upNext.occName ? (
        <>
          <h4 className="occ-upNext-title">Up Next</h4>
          <h2 className="occ-upNext-name">
            {`${upNext.occName}'s ${upNext.occasion}`}
          </h2>
          <div className="occ-upNext-center">
            <BsCalendar className="occ-upNext-icon" />
            <div className="occ-upNext-left-container">
              <h6>On {moment(upNext.occDate.toDate()).format("LL")}</h6>
              <p>
                That's {moment(upNext.occDate.toDate()).fromNow()} from now!
              </p>
            </div>
          </div>
          {!upNext.occGift && (
            <Link to={`/occasionpage/${upNext.occasionId}`}>
              <h4
                onClick={() => onClickOccasion(currentOccasionWithDate)}
                className="occ-upNext-gift-txt"
              >
                Set up a gift for this occasion.
              </h4>
            </Link>
          )}
        </>
      ) : (
        <>
          <h4 className="occ-upNext-title">Welcome</h4>
          <h2 className="occ-upNext-name">Welcome to Occasions</h2>
          <div className="occ-upNext-center">
            <div
              style={{ textAlign: "center" }}
              className="occ-upNext-left-container"
            >
              <h6>Create your first occasion by clicking on the plus icon</h6>
            </div>
          </div>
          <Link to="/addoccasion">
            <MdAddCircleOutline
              style={{ fontSize: "40px" }}
              className="occ-upNext-icon"
            />
          </Link>
        </>
      )}
    </div>
  );
}

export default UpNext;
