import * as actions from "../actions";

const initState = {
  currentOccasion: {},
};

const occasionsReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_OCCASION:
      return {
        ...state,
        currentOccasion: action.payload,
      };
    default:
      return state;
  }
};

export default occasionsReducer;
