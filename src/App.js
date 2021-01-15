import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
import ScheduledPage from "./pages/ScheduledPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/userhome" component={UserHome} />
            <Route path="/addoccasion" component={AddOccasion} />
            <Route path="/occasionpage" component={OccasionPage} />
            <Route path="/giftspage" component={GiftsPage} />
            <Route path="/singlecardpage" component={SingleCardPage} />
            <Route path="/cartpage" component={CartPage} />
            <Route path="/scheduledpage" component={ScheduledPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;