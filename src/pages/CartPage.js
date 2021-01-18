import React from "react";
//Redux
import { useSelector } from "react-redux";
//Component
import BtnTemplate from "../components/navbar/BtnTemplate";
import CartItem from "../components/cart/CartItem";
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
      <h1 className="cart-page-title">Your cart</h1>
      <div className="cart-page-inner-container">
        <div className="cart-page-items-main-container">
          {currentCart.length > 0 ? (
            currentCart.map((item) => {
              return (
                <CartItem
                  key={currentCart.indexOf(item)}
                  item={item}
                  currentCart={currentCart}
                  deleteItem={deleteItem}
                />
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
