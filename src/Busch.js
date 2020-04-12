import React, { Component } from "react";
import busch_image from "./images/busch.png";
import "./App.css";
import Title from "./Title.js";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from "react-router-dom";

export default class Busch extends Component {
  render() {
    return (
      <div className="beerContainer">
        <img src={busch_image} alt="Busch Beer" />
        <Title>
          <h1>Busch Beer</h1>
        </Title>

        <Link exact className="all-links" to="/VendingMachine">
          Back to Menu
        </Link>
      </div>
    );
  }
}
