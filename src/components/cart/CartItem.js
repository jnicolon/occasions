import React from "react";
import moment from "moment";
import { BsTrash } from "react-icons/bs";

function CartItem({ item, currentCart, deleteItem }) {
  return (
    <div className="cart-item-container">
      <img className="cart-item-img" src={item.card.url} alt="card name"></img>
      <div className="cart-item-text">
        <h4 className="cart-item-title">{item.card.cardName}</h4>
        <h6>
          For {item.currentOccasion.occName}'s {item.currentOccasion.occasion}
        </h6>
        <h6>
          This item will be sent on{" "}
          {moment(item.currentOccasion.occDate.toDate()).format("LL")}
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
}

export default CartItem;
