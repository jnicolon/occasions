import React, { useState, useEffect } from "react";
//Components
import OccasionListBtns from "./OccasionListBtns";
import OccasionListItem from "./OccasionListItem";
import EmailSign from "../emailTutorial/EmailSign";
//State
import { useDispatch } from "react-redux";
//Moment
import moment from "moment";
//Hooks
import useUserOccasions from "../../hooks/useUserOccasions";
//Actions
import { setCurrentOccasion } from "../../redux/actions/occasionsActions";

function OccasionList() {
  const dispatch = useDispatch();
  const [orderBy, setOrderBy] = useState("occDate");
  const userOccasions = useUserOccasions(orderBy);

  useEffect(() => {
    dispatch(setCurrentOccasion(""));
  });

  if (userOccasions.length >= 1) {
    return (
      <div className="occ-list-container">
        <div className="occ-list-title-container">
          <h2>Your upcoming occasions</h2>
          <OccasionListBtns setOrderBy={setOrderBy} />

          {userOccasions.map((occasion) => {
            let today = new Date();
            let compare = new Date(moment(occasion.occDate.toDate()).format());

            if (compare.getTime() >= today.getTime()) {
              return (
                <OccasionListItem
                  to={`/occasionpage/${occasion.occasionId}`}
                  key={occasion.occasionId}
                  occDate={moment(occasion.occDate.toDate()).format("ll")}
                  currentOccasion={occasion}
                />
              );
            } else return null;
          })}
        </div>
        <EmailSign />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default OccasionList;
