import React, { useState, useEffect } from "react";
//Router
import { useParams, Link, Redirect } from "react-router-dom";
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

  //Use this for people going back from the cart without passing through userhome
  const [itemAlreadyInCart, setItemAlreadyInCart] = useState(false);
  useEffect(() => {
    cart.forEach((cartItem) => {
      if (currentOccasion.occasionId === cartItem.currentOccasion.occasionId) {
        setItemAlreadyInCart(true);
      }
    });
  }, [cart, currentOccasion]);

  const addToCart = (item) => {
    firestore
      .collection("cart")
      .doc(userId)
      .set({ cart: [...cart, item] });
  };

  if (card) {
    return (
      <div className="single-card-page-container">
        {itemAlreadyInCart && <Redirect to="/userhome" />}
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
