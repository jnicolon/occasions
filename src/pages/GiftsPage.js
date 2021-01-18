import React, { useState, useEffect } from "react";
//Hooks
import useCardList from "../hooks/useCardList";
//Component
import SingleCard from "../components/gifts/SingleCard";
//State
import { useSelector } from "react-redux";
//Router
import { Redirect } from "react-router-dom";

export default function GiftsPage() {
  const { occName, occasion } = useSelector(
    (state) => state.occasions.currentOccasion
  );

  const cards = useCardList();

  //Redirect for when people hit refresh and state in redux is reset.
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (occName === undefined) {
      setRedirect(true);
    }
  }, [occName]);

  return (
    <div className="gift-page-container ">
      {redirect && <Redirect to="/userhome" />}
      <div className="gift-page-title">
        <h2>Choose a gift for</h2>
        <h1>{`${occName}'s ${occasion}`}</h1>
      </div>
      <div className="gift-page-cards-container">
        {cards.map((card) => {
          if (card.occasion === occasion) {
            return (
              <SingleCard
                cardName={card.cardName}
                cardAuthor={card.cardAuthor}
                url={card.url}
                key={card.cardName}
                cardId={card.cardId}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
