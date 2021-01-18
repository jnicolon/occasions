import React from "react";
//Component
import { AiOutlineShoppingCart } from "react-icons/ai";
//Router
import { Link } from "react-router-dom";
//Firestore
import { useFirestoreConnect } from "react-redux-firebase";
//Redux
import { useSelector } from "react-redux";

function CartBtn() {
  const userId = useSelector((state) => state.firebase.auth.uid);
  useFirestoreConnect([{ collection: "cart", doc: userId }]);
  const { cart } = useSelector(({ firestore: { data } }) => data.cart[userId]);

  return (
    <Link to="/cartpage">
      <span className="nav-cart-icon-container">
        <AiOutlineShoppingCart className="navbar-icon" />
        {cart.length === 0 ? null : (
          <div className="nav-cart-number">
            <p>{cart.length}</p>
          </div>
        )}
      </span>
    </Link>
  );
}

export default CartBtn;
