import React, { useState, useEffect } from "react";
//Router
import { useParams, Link, Redirect } from "react-router-dom";
//State
import { useSelector } from "react-redux";
//Components
import BtnTemplate from "../components/navbar/BtnTemplate";
import SingleCardPageMiddle from "../components/gifts/SingleCardPageMiddle";
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

  const [cardMessage, setCardMessage] = useState("");

  const firestore = useFirestore();
  const cart = useGetCart();

  const { cardId } = useParams();
  const allCards = useCardList();
  let card = allCards.filter((card) => card.cardId === cardId)[0];

  //Redirect for when people hit refresh and state in redux is reset.
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (occName === undefined) {
      setRedirect(true);
    }
  }, [occName]);

  //Use this for people going back from the cart without passing through userhome
  const [itemAlreadyInCart, setItemAlreadyInCart] = useState(false);
  useEffect(() => {
    cart.forEach((cartItem) => {
      if (currentOccasion.occasionId === cartItem.currentOccasion.occasionId) {
        setItemAlreadyInCart(true);
      }
    });
  }, [cart, currentOccasion]);

  const handleChange = (e) => {
    setCardMessage(e.target.value);
  };

  const addToCart = (item) => {
    item.card.cardMessage = cardMessage;
    console.log(item);
    firestore
      .collection("cart")
      .doc(userId)
      .set({ cart: [...cart, item] });
  };

  if (card) {
    return (
      <div className="single-card-page-container">
        {itemAlreadyInCart && <Redirect to="/userhome" />}
        {redirect && <Redirect to="/userhome" />}
        {occName && (
          <div className="gift-page-title">
            <h2>Write something for</h2>
            <h1>{`${occName}'s ${occasion}`}</h1>
          </div>
        )}
        <SingleCardPageMiddle handleChange={handleChange} card={card} />
        <Link to="/cartpage">
          <BtnTemplate
            onClick={() => addToCart({ card, currentOccasion })}
            text="Send to scheduler"
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
