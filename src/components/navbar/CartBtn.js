import React, { useEffect, useState } from "react";
//Component
import { AiOutlineShoppingCart } from "react-icons/ai";
//Router
import { Link } from "react-router-dom";
//Hooks
import useGetCart from "../../hooks/useGetCart";
//Firestore
import { useFirestoreConnect } from "react-redux-firebase";

function CartBtn() {
  useFirestoreConnect(["cart"]);
  const cart = useGetCart();

  return (
    <Link to="/cartpage">
      <span className="nav-cart-icon-container">
        <AiOutlineShoppingCart className="navbar-icon" />
        {cart.length && cart.length === 0 ? null : (
          <div className="nav-cart-number">
            <p>{cart.length}</p>
          </div>
        )}
      </span>
    </Link>
  );
}

export default CartBtn;
