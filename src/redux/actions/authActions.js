import * as actions from ".";

export const toggleAuthStatus = (status) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    return dispatch({ type: actions.TOGGLE_LOGGED_STATUS, payload: status });
  };
};
