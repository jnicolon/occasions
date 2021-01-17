import * as actions from ".";

// export const createOccasion = (occasion) => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     firestore.collection("occasions").add({
//       ...occasion,
//     });
//     dispatch({ type: actions.CREATE_OCCASION, payload: occasion });
//   };
// };

export const getUserOccasions = (userOccasions) => {
  return (dispatch, getState, { getfirebase, getFirestore }) => {
    dispatch({ type: actions.GET_USER_COLLECTIONS, payload: userOccasions });
  };
};

export const setCurrentOccasion = (currentOccasion) => {
  return (dispatch, getState, { getfirebase, getFirestore }) => {
    dispatch({ type: actions.SET_CURRENT_OCCASION, payload: currentOccasion });
  };
};
