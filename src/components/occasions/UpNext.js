import React from "react";
//Custom Hook
import useUpNext from "../../hooks/useUpNext";
//Icon
import { BsCalendar } from "react-icons/bs";
//Moment
import moment from "moment";
// //Router
// import { Link } from "react-router-dom";

function UpNext() {
  const upNext = useUpNext();

  return (
    <div className="occ-upNext-container">
      {upNext.occName && (
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

          <h4 className="occ-upNext-gift-txt">
            Set up a gift for this occasion.
          </h4>
        </>
      )}
    </div>
  );
}

export default UpNext;
