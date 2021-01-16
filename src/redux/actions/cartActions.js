import * as actions from ".";

export const addItemToCart = (item, user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    return dispatch({ type: actions.ADD_ITEM_TO_CART, payload: item });
  };
};

export const setCurrentCart = (cart) => {
  return (dispatch) => {
    let currentCart = cart;
    return dispatch({ type: actions.SET_CURRENT_CART, payload: currentCart });
  };
};
