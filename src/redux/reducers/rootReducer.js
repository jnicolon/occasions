import occasionsReducer from "./occassionsReducer";
import cartReducer from "./cartReducer";
import modalReducer from "./modalReducer";
import authReducer from "./authReducer";

import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  modal: modalReducer,
  occasions: occasionsReducer,
  cart: cartReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
});

export default rootReducer;
