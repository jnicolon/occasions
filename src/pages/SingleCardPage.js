import React, { useState } from "react";
//Router
import { useParams, Link } from "react-router-dom";
//State
import { useSelector } from "react-redux";
//Components
import BtnTemplate from "../components/navbar/BtnTemplate";
//Hook

function SingleCardPage() {
  const { cardId } = useParams();
  const { occName, occasion } = useSelector(
    (state) => state.occasions.currentOccasion
  );

  //   const [currentCart, setCurrentCart] = useState([]);
  const [card, setCard] = useState({
    cardName: "Brother's",
    cardAuthor: "Bennjamin",
    url:
      "https://firebasestorage.googleapis.com/v0/b/thoughtfulv3.appspot.com/o/cards%2Fbirthday%2Fbirthday_7.png?alt=media&token=bb9dddfe-b616-44cc-873f-b29dc738c0e6",
    cardId: "123",
    occasion: "Birthday",
  });

  const currentOccasion = {
    occasion: "Birthday",
    occName: "Maria",
    occDate: "September 29th",
  };

  //   const userId = useSelector((state) => state.firebase.auth.uid);

  //   useEffect(() => {
  //     firestore
  //       .collection("cards")
  //       .doc(cardId)
  //       .get()
  //       .then((doc) => {
  //         setCard(doc.data());
  //       })
  //       .catch((err) => console.log(err));
  //   }, [firestore, setCard, cardId]);

  //   useEffect(() => {
  //     if (cart) {
  //       for (let [key, value] of Object.entries(cart)) {
  //         if (key === userId) {
  //           setCurrentCart(value.cart);
  //         }
  //       }
  //     }
  //   }, [currentCart, cart, userId]);

  //   const addToCart = (item) => {
  //     firestore
  //       .collection("cart")
  //       .doc(userId)
  //       .set({ cart: [...currentCart, item] });
  //   };

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
          //   onClick={() => addToCart({ card, currentOccasion })}
          text="Add to Cart"
        />
      </Link>
      <h2>{card.cardName}</h2>
      <h5>by {card.cardAuthor}</h5>
    </div>
  );
}

export default SingleCardPage;
