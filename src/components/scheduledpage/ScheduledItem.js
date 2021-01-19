import React from "react";
//Moment
import moment from "moment";
//Router
import { Link } from "react-router-dom";

function ScheduledItem({ item, scheduledOccasions }) {
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
          ).format("LL")} to ${item.currentOccasion.occEmail}`}</p>
        </div>
      </div>
    </Link>
  );
}

export default ScheduledItem;
