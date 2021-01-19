import React from "react";
//Redux
import { useSelector } from "react-redux";
//Moment
import moment from "moment";
//Router
import { Link } from "react-router-dom";
//Hooks
import useGetScheduledOccasions from "../hooks/useGetScheduledOccasions";

function ScheduledPage() {
  const userId = useSelector((state) => state.firebase.auth.uid);
  const scheduledOccasions = useGetScheduledOccasions(userId);

  return (
    <div className="scheduled-page-container">
      <h3>Your scheduled occasions</h3>
      {scheduledOccasions &&
        scheduledOccasions.map((item) => {
          let today = new Date();
          let compare = new Date(
            moment(item.currentOccasion.occDate.toDate()).format()
          );
          console.log(item);

          if (compare.getTime() >= today.getTime()) {
            return (
              <Link
                key={scheduledOccasions.indexOf(item)}
                to={`/occasionpage/${item.currentOccasion.occasionId}`}
              >
                <div className="scheduled-page-item-container">
                  <img
                    className="scheduled-page-item-img"
                    src={item.card.url}
                    alt={`card name ${item.card.cardName}`}
                  ></img>
                  <div>
                    <p className="scheduled-page-item-title">
                      {`For ${item.currentOccasion.occName}'s ${item.currentOccasion.occasion}`}
                    </p>
                    <p className="scheduled-page-item-txt">
                      {`You have selected the card ${item.card.cardName} by ${item.card.cardAuthor}`}
                    </p>
                    <p className="scheduled-page-item-txt">{`to be sent on ${moment(
                      item.currentOccasion.occDate.toDate()
                    ).format("LL")}`}</p>
                  </div>
                </div>
              </Link>
            );
          } else {
            return null;
          }
        })}
    </div>
  );
}

export default ScheduledPage;
