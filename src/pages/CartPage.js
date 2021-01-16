import React from "react";
import { useState, useEffect } from "react";
// import { useFirestoreConnect } from "react-redux-firebase";
// import { useSelector } from "react-redux";

import { BsTrash } from "react-icons/bs";
// import { useFirestore } from "react-redux-firebase";
import BtnTemplate from "../components/navbar/BtnTemplate";
import { Link } from "react-router-dom";

function CartPage() {
  const [currentCart, setCurrentCart] = useState([
    // {
    //   card: {
    //     cardName: "Birthday",
    //     url:
    //       "https://firebasestorage.googleapis.com/v0/b/thoughtfulv3.appspot.com/o/cards%2Fbirthday%2Fbirthday_4.png?alt=media&token=c322743c-d7b9-4c86-aef9-71634b2d7b59",
    //   },
    //   currentOccasion: {
    //     occName: "Maria",
    //     occasion: "Birthday",
    //   },
    // },
    // {
    //   card: {
    //     cardName: "Birthday",
    //     url:
    //       "https://firebasestorage.googleapis.com/v0/b/thoughtfulv3.appspot.com/o/cards%2Fbirthday%2Fbirthday_4.png?alt=media&token=c322743c-d7b9-4c86-aef9-71634b2d7b59",
    //   },
    //   currentOccasion: {
    //     occName: "Maria",
    //     occasion: "Birthday",
    //   },
    // },
    // {
    //   card: {
    //     cardName: "Birthday",
    //     url:
    //       "https://firebasestorage.googleapis.com/v0/b/thoughtfulv3.appspot.com/o/cards%2Fbirthday%2Fbirthday_4.png?alt=media&token=c322743c-d7b9-4c86-aef9-71634b2d7b59",
    //   },
    //   currentOccasion: {
    //     occName: "Maria",
    //     occasion: "Birthday",
    //   },
    // },
  ]);

  //   useFirestoreConnect(["cart"]);
  //   const cart = useSelector((state) => {
  //     return state.firestore.data.cart;
  //   });
  //   const userId = useSelector((state) => state.firebase.auth.uid);
  //   const firestore = useFirestore();
  //   useEffect(() => {
  //     if (cart) {
  //       for (let [key, value] of Object.entries(cart)) {
  //         if (key === userId) {
  //           setCurrentCart(value.cart);
  //         }
  //       }
  //     }
  //   }, [currentCart, cart, userId]);

  //   const updateOccasionGiftStatus = async () => {
  //     //Change gift status of occasions to true
  //     let giftOccasions = [];
  //     currentCart.forEach((element) => {
  //       giftOccasions.push(element.currentOccasion.occasionId);
  //     });

  //     giftOccasions.forEach((element) => {
  //       firestore
  //         .collection("occasions")
  //         .doc(userId)
  //         .collection("userOccasions")
  //         .doc(element)
  //         .update({
  //           occGift: true,
  //         });
  //     });

  //     //Empty the cart after clicking
  //     firestore.collection("cart").doc(userId).set({
  //       cart: [],
  //     });

  //     //update the scheduled occasions

  //     let tempScheduledOccasions = await firestore
  //       .collection("scheduledOccasions")
  //       .doc(userId)
  //       .get()
  //       .then((doc) => {
  //         if (doc.exists) {
  //           console.log(doc.data());
  //           return doc.data();
  //         } else {
  //           return [];
  //         }
  //       });

  //     let currentUserInfo = await firestore
  //       .collection("users")
  //       .doc(userId)
  //       .get()
  //       .then((doc) => {
  //         if (doc.exists) {
  //           return { currentUserInfo: doc.data() };
  //         } else return [];
  //       });

  //     console.log(tempScheduledOccasions);
  //     let oldScheduledOccasions;
  //     if (tempScheduledOccasions.scheduledOccasionsInfo) {
  //       oldScheduledOccasions = tempScheduledOccasions.scheduledOccasionsInfo;
  //     } else {
  //       oldScheduledOccasions = [];
  //     }

  //     let newScheduledOccasions = [...oldScheduledOccasions, ...currentCart];
  //     let finalScheduledOccasions = [];

  //     newScheduledOccasions.forEach((occ) => {
  //       finalScheduledOccasions.push({ ...occ, ...currentUserInfo });
  //     });

  //     firestore
  //       .collection("scheduledOccasions")
  //       .doc(userId)
  //       .set({ scheduledOccasionsInfo: finalScheduledOccasions })
  //       .then(console.log("scheduled occasions set!"));
  //   };

  //   const deleteItem = (target) => {
  //     const tempCurrentCart = [...currentCart];
  //     tempCurrentCart.splice(target, 1);
  //     firestore
  //       .collection("cart")
  //       .doc(userId)
  //       .update({ cart: [...tempCurrentCart] });
  //   };

  return (
    <div className="cart-page-container">
      <h4>Your cart</h4>
      <div className="cart-page-inner-container">
        <div className="cart-page-items-main-container">
          {currentCart.length > 0 ? (
            currentCart.map((item) => {
              return (
                <div
                  className="cart-item-container"
                  key={currentCart.indexOf(item)}
                >
                  <img
                    className="cart-item-img"
                    src={item.card.url}
                    alt="card name"
                  ></img>
                  <div className="cart-item-text">
                    <h4>{item.card.cardName}</h4>
                    <h6>
                      For {item.currentOccasion.occName}'s{" "}
                      {item.currentOccasion.occasion}
                    </h6>
                    {/* <h6>
                  This item will be sent on{" "}
                  {moment(item.currentOccasion.occDate.toDate()).format("LL")}{" "}
                  to jnicolon@gmail.com
                </h6> */}
                  </div>
                  <div
                    // onClick={() => deleteItem(currentCart.indexOf(item))}
                    className="cart-item-delete"
                  >
                    <BsTrash className="navbar-icon"></BsTrash>
                  </div>
                </div>
              );
            })
          ) : (
            <h3>There are no items in the cart right now.</h3>
          )}
        </div>
        <div className="cart-page-btn-container">
          {currentCart.length > 0 && (
            <BtnTemplate
              //   onClick={updateOccasionGiftStatus}
              text={
                currentCart.length === 1
                  ? "Schedule this gift"
                  : "Schedule these gifts"
              }
            />
          )}

          <div style={{ textAlign: "right" }}>
            <Link to="/">
              <p className="cart-page-link">Return to your occasions list</p>
            </Link>

            <Link to="/scheduledpage">
              <p className="cart-page-link">See all scheduled gifts</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
