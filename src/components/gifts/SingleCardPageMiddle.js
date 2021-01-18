import React from "react";

function SingleCardPageMiddle({ card, handleChange }) {
  return (
    <div className="single-card-page-mid-container">
      <img
        className="single-card-page-img"
        src={card.url}
        alt={`${card.cardName}`}
      ></img>
      <form className="single-card-page-form">
        <label>Write something to send on your card</label>
        <textarea
          onChange={(e) => handleChange(e)}
          className="single-card-page-input"
          type="text"
          name="cardText"
        ></textarea>
      </form>
    </div>
  );
}

export default SingleCardPageMiddle;
