import React from "react";
import { Link } from "react-router-dom";
import BtnTemplate from "../navbar/BtnTemplate";

function OccInCart() {
  return (
    <div className="occasion-page-btn-container">
      <h1>There's already a gift in the cart for this occasion.</h1>
      <div className="occasion-page-options">
        <Link to={`/cartpage`}>
          <BtnTemplate text="Go to cart page" />
        </Link>
      </div>
    </div>
  );
}

export default OccInCart;
