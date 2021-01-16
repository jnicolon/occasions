import * as actions from "../actions";

const initState = {
  loggedIn: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.TOGGLE_LOGGED_STATUS:
      return {
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
