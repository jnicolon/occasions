import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Router
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

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
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
