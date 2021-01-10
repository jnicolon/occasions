import "./App.scss";

//Components
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";

//Router
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Pages
import LogIn from "./pages/LogIn";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LogIn} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
