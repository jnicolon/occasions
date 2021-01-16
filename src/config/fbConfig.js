import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const AUTH = process.env.REACT_APP_GOOGLE_AUTH_DOMAIN;
const PROJECT_ID = process.env.REACT_APP_GOOGLE_PROJECT_ID;
const STORAGE = process.env.REACT_APP_GOOGLE_STORAGE_BUCKET;
const MSG_ID = process.env.REACT_APP_GOOGLE_MESSAGING_SENDING_ID;
const APP_ID = process.env.REACT_APP_GOOGLE_APP_ID;
const M_ID = process.env.REACT_APP_GOOGLE_MEASUREMENT_ID;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH,
  projectId: PROJECT_ID,
  storageBucket: STORAGE,
  messagingSenderId: MSG_ID,
  appId: APP_ID,
  measurementId: M_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
