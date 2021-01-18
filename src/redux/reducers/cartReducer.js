import * as actions from "../actions";

const initState = {
  cart: [],
  currentCart: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SET_CART:
      return {
        cart: [...action.payload],
      };
    case actions.ADD_ITEM_TO_CART:
      return {
        cart: [...state.cart, action.payload],
      };
    case actions.SET_CURRENT_CART:
      return {
        currentCart: [action.payload],
      };

    default:
      return state;
  }
};

export default cartReducer;
