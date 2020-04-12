import React, { Component } from "react";
import castle_image from "./images/castle.png";
import "./App.css";
import Title from "./Title.js";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from "react-router-dom";

export default class Castle extends Component {
  render() {
    return (
      <div className="beerContainer">
        <img src={castle_image} alt="Castle Beer" />
        <Title>
          <h1>Castle Beer</h1>
        </Title>
        <hr></hr>
        <Link exact className="all-links" to="/VendingMachine">
          Back to Menu
        </Link>
      </div>
    );
  }
}
