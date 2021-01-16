import React, { useEffect } from "react";

//Css
import "./App.scss";

//Router
import { HashRouter, Route, Switch } from "react-router-dom";
import AuthRoute from "./components/auth/AuthRoute";

//State
import { useSelector, useDispatch } from "react-redux";
import { toggleAuthStatus } from "./redux/actions/authActions";

//Firebase
import { useFirebase } from "react-redux-firebase";

//Pages
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import UserHome from "./pages/UserHome";
import AddOccasion from "./pages/AddOccasion";
import OccasionPage from "./pages/OccasionPage";
import GiftsPage from "./pages/GiftsPage";
import SingleCardPage from "./pages/SingleCardPage";
import CartPage from "./pages/CartPage";
import ScheduledPage from "./pages/ScheduledPage";

//Modal
import { toggleProfileModal } from "./redux/actions/modalActions";

function App() {
  const firebase = useFirebase();
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(toggleAuthStatus(true));
      } else {
        dispatch(toggleAuthStatus(false));
      }
    });
  });

  return (
    <div>
      <HashRouter basename="/">
        <Navbar />
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <AuthRoute path="/userhome" component={UserHome} />
            <AuthRoute path="/addoccasion" component={AddOccasion} />
            <AuthRoute path="/occasionpage" component={OccasionPage} />
            <AuthRoute path="/giftspage" component={GiftsPage} />
            <AuthRoute path="/singlecardpage" component={SingleCardPage} />
            <AuthRoute path="/cartpage" component={CartPage} />
            <AuthRoute path="/scheduledpage" component={ScheduledPage} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
