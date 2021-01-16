import * as actions from "../actions";

const initState = {
  userOccasions: [],
  currentOccasion:""
};

const occasionsReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_USER_COLLECTIONS:
      return {
        ...state,
        userOccasions: { ...action.payload },
      };
      case actions.SET_CURRENT_OCCASION:
        return {
          ...state,
          currentOccasion: action.payload
        }
    default:
      return state;
  }
};

export default occasionsReducer;
