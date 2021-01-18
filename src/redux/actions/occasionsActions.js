import * as actions from ".";

export const setCurrentOccasion = (currentOccasion) => {
  return (dispatch, getState, { getfirebase, getFirestore }) => {
    dispatch({ type: actions.SET_CURRENT_OCCASION, payload: currentOccasion });
  };
};
