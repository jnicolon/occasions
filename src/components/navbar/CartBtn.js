import React from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";

import { Link } from "react-router-dom";

function CartBtn() {
  const currentCart = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Link to="/">
      <span className="nav-cart-icon-container">
        <AiOutlineShoppingCart className="navbar-icon" />
        {currentCart.length === 0 ? null : (
          <div className="nav-cart-number">
            <p>{currentCart.length}</p>
          </div>
        )}
      </span>
    </Link>
  );
}

export default CartBtn;
