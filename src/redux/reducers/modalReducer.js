import * as actions from "../actions";

const initState = {
  profileBtn: false,
  unscheduleBtn: false,
};

const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.TOGGLE_PROFILE_MODAL:
      return {
        profileBtn: action.payload,
      };
    case actions.TOGGLE_UNSCHEDULE_MODAL:
      return {
        unscheduleBtn: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
