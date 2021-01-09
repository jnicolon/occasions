import "./App.scss";

//Components
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";

//Router
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
