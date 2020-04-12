import React, { Component } from "react";
import corona_image from "./images/corona.png";
import "./App.css";
import Title from "./Title.js";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from "react-router-dom";

export default class Corona extends Component {
  render() {
    return (
      <div className="beerContainer">
        <img src={corona_image} alt="Corona Beer" />
        <Title>
          <h1>Corona Beer</h1>
        </Title>
        <Link exact className="all-links" to="/VendingMachine">
          Back to Menu
        </Link>
      </div>
    );
  }
}
