import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SingleCard from "../components/gifts/SingleCard";
import { useFirestore } from "react-redux-firebase";

export default function GiftsPage() {
  //   const currentOccasion = useSelector(
  //     (state) => state.occasions.currentOccasion
  //   );
  const currentOccasion = { occName: "Maria", occasion: "Birthday" };
  const { occName, occasion } = currentOccasion;

  const [cards, setCards] = useState([
    {
      cardName: "Brother's",
      cardAuthor: "Bennjamin",
      url:
        "https://i.pinimg.com/originals/b0/47/d0/b047d0d2d536056481d838ad7d3135ad.jpg",
      cardId: "123",
      occasion: "Birthday",
    },
  ]);

  //   const firestore = useFirestore();

  //   useEffect(() => {
  //     firestore
  //       .collection("cards")
  //       .get()
  //       .then((snap) => {
  //         let tempCards = [];
  //         snap.forEach((doc) => {
  //           tempCards.push({ ...doc.data(), cardId: doc.id });
  //         });
  //         setCards(tempCards);
  //       })
  //       .catch((err) => console.log(err));
  //   }, [firestore, setCards]);

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
