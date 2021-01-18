import React from "react";
//Redux
import { useSelector } from "react-redux";
//Moment
import moment from "moment";
//Component
import { BsTrash } from "react-icons/bs";
import BtnTemplate from "../components/navbar/BtnTemplate";
//Firestore
import { useFirestore } from "react-redux-firebase";
//Router
import { Link } from "react-router-dom";
//Hooks
import useGetCart from "../hooks/useGetCart";
//Function
import handleClickCartPage from "../functions/handleClickCartPage";

function CartPage() {
  const currentCart = useGetCart();
  const userId = useSelector((state) => state.firebase.auth.uid);
  const firestore = useFirestore();

  const deleteItem = (target) => {
    const tempCurrentCart = [...currentCart];
    tempCurrentCart.splice(target, 1);
    firestore
      .collection("cart")
      .doc(userId)
      .update({ cart: [...tempCurrentCart] });
  };

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
                    <h6>
                      This item will be sent on{" "}
                      {moment(item.currentOccasion.occDate.toDate()).format(
                        "LL"
                      )}
                      {""}
                    </h6>
                    <h6>to jnicolon@gmail.com</h6>
                  </div>
                  <div
                    onClick={() => deleteItem(currentCart.indexOf(item))}
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
              onClick={() =>
                handleClickCartPage(currentCart, userId, firestore)
              }
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
