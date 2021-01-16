import "./App.scss";
import { HashRouter, Route, Switch } from "react-router-dom";

//Router
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

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Navbar />
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={Home} />
<<<<<<< HEAD
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/userhome" component={UserHome} />
            <Route exact path="/addoccasion" component={AddOccasion} />
            <Route exact path="/occasionpage" component={OccasionPage} />
            <Route exact path="/giftspage" component={GiftsPage} />
            <Route exact path="/singlecardpage" component={SingleCardPage} />
            <Route exact path="/cartpage" component={CartPage} />
            <Route exact path="/scheduledpage" component={ScheduledPage} />
=======
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/userhome" component={UserHome} />
            <Route path="/addoccasion" component={AddOccasion} />
            <Route path="/occasionpage" component={OccasionPage} />
            <Route path="/giftspage" component={GiftsPage} />
            <Route path="/singlecardpage" component={SingleCardPage} />
            <Route path="/cartpage" component={CartPage} />
>>>>>>> parent of a1953ba... scheduled page
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
