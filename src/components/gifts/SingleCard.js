import React from "react";
import { Link } from "react-router-dom";

function SingleCard({ cardName, cardAuthor, url, cardId }) {
  return (
    <div className="single-card-container">
      <Link to={`/singlecardpage/${cardId}`}>
        <img alt="cardName" src={url} className="single-card-image"></img>
        <div className="single-card-txt-container">
          <h2 className="single-card-name"> {cardName}</h2>
          <h4 className="single-card-author"> by {cardAuthor}</h4>
        </div>
      </Link>
    </div>
  );
}

export default SingleCard;
