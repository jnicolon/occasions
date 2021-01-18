import * as actions from ".";

export const addItemToCart = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    return dispatch({ type: actions.ADD_ITEM_TO_CART, payload: item });
  };
};

export const setCart = (userId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("cart")
      .doc(userId)
      .get()
      .then((doc) => {
        return dispatch({ type: actions.SET_CART, payload: doc.data() });
      });
  };
};

export const setCurrentCart = (cart) => {
  return (dispatch) => {
    let currentCart = cart;
    return dispatch({ type: actions.SET_CURRENT_CART, payload: currentCart });
  };
};
