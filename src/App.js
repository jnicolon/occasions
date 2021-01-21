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
import EmailTest from "./pages/EmailTest";

//Modal
import { toggleProfileModal } from "./redux/actions/modalActions";

function App() {
  const profileBtnModalStatus = useSelector((state) => state.modal.profileBtn);
  const firebase = useFirebase();
  const dispatch = useDispatch();

  const handleModal = (e) => {
    if (profileBtnModalStatus) {
      dispatch(toggleProfileModal());
    }
  };

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
    <div onClick={(e) => handleModal(e)}>
      <HashRouter basename="/">
        <Navbar />
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <AuthRoute path="/userhome" component={UserHome} />
            <AuthRoute path="/addoccasion" component={AddOccasion} />
            <AuthRoute
              path="/occasionpage/:occasionId"
              component={OccasionPage}
            />
            <AuthRoute path="/giftspage/:occasionId" component={GiftsPage} />
            <AuthRoute
              path="/singlecardpage/:cardId"
              component={SingleCardPage}
            />
            <AuthRoute path="/cartpage" component={CartPage} />
            <AuthRoute path="/scheduledpage" component={ScheduledPage} />
            <AuthRoute path="/emailtest" component={EmailTest} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
