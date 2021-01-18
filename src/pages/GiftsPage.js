import React from "react";
//Hooks
import useCardList from "../hooks/useCardList";
//Component
import SingleCard from "../components/gifts/SingleCard";
//State
import { useSelector } from "react-redux";

export default function GiftsPage() {
  const { occName, occasion } = useSelector(
    (state) => state.occasions.currentOccasion
  );

  const cards = useCardList();

  return (
    <div className="gift-page-container ">
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
