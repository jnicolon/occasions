import React from "react";
//Router
import { useParams, Link } from "react-router-dom";
//State
import { useSelector } from "react-redux";
//Components
import BtnTemplate from "../components/navbar/BtnTemplate";
//Hook
import useCardList from "../hooks/useCardList";
import useGetCart from "../hooks/useGetCart";
//Firestore
import { useFirestore } from "react-redux-firebase";

function SingleCardPage() {
  const userId = useSelector((state) => state.firebase.auth.uid);
  const currentOccasion = useSelector(
    (state) => state.occasions.currentOccasion
  );
  const { occName, occasion } = currentOccasion;

  const firestore = useFirestore();
  const cart = useGetCart();

  const { cardId } = useParams();
  const allCards = useCardList();
  const card = allCards.filter((card) => card.cardId === cardId)[0];

  const addToCart = (item) => {
    firestore
      .collection("cart")
      .doc(userId)
      .set({ cart: [...cart, item] });
  };

  if (card) {
    return (
      <div className="single-card-page-container">
        {occName && (
          <div className="gift-page-title">
            <h1>{`${occName}'s ${occasion}`}</h1>
          </div>
        )}

        <img
          className="single-card-page-img"
          src={card.url}
          alt={`${card.cardName}`}
        ></img>
        <Link to="/cartpage">
          <BtnTemplate
            onClick={() => addToCart({ card, currentOccasion })}
            text="Add to Cart"
          />
        </Link>
        <h2>{card.cardName}</h2>
        <h5>by {card.cardAuthor}</h5>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default SingleCardPage;
