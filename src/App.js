import React from "react";
import "./App.css";
import VendingMachine from "./VendingMachine.js";
import Busch from "./Busch.js";
import Corona from "./Corona.js";
import Castle from "./Castle.js";
import FoodPage from "./FoodPage.js";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="machineContainer">
      <div className="App-nav">
        <NavLink
          exact
          className="all-links"
          activeClassName="active-link"
          to="/VendingMachine"
        >
          Home
        </NavLink>
        <NavLink
          exact
          className="all-links"
          activeClassName="active-link"
          to="/Busch"
        >
          Busch
        </NavLink>
        <NavLink
          exact
          className="all-links"
          activeClassName="active-link"
          to="/Castle"
        >
          Castle
        </NavLink>
        <NavLink
          exact
          className="all-links"
          activeClassName="active-link"
          to="/Corona"
        >
          Corona
        </NavLink>
        <NavLink
          exact
          className="all-links"
          activeClassName="active-link"
          to="/FoodPage"
        >
          Foods
        </NavLink>
      </div>

      <Switch>
        <Route exact path="/" component={VendingMachine} />
        <Route exact path="/VendingMachine" component={VendingMachine} />
        <Route exact path="/Busch" component={Busch} />
        <Route exact path="/Corona" component={Corona} />
        <Route exact path="/Castle" component={Castle} />
        <Route exact path="/FoodPage" component={FoodPage} />
      </Switch>
    </div>
  );
}

export default App;
