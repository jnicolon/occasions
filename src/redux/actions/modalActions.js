import * as actions from ".";

export const toggleProfileModal = (status) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    return dispatch({ type: actions.TOGGLE_PROFILE_MODAL, payload: status });
  };
};

export const toggleUnscheduleModal = (status) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    return dispatch({ type: actions.TOGGLE_UNSCHEDULE_MODAL, payload: status });
  };
};
