import React, { Component } from "react";
import "./App.css";
import Title from "./Title.js";
import machine from "./images/vending-machine.png";
import corona_logo from "./images/corona_logo.jpg";
import busch_logo from "./images/busch_logo.jfif";
import castle_logo from "./images/castle_logo.jpg";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from "react-router-dom";

export default class VendingMachine extends Component {
  render() {
    return (
      <div className="vendingMachineContainer">
        <img src={machine} alt="Vending Machine" />
        <Title>
          <h1>Beer Vending Machine</h1>
        </Title>

        <div className="App-nav">
          <Link exact className="all-links" to="/Busch">
            <img className="logos" src={busch_logo} alt="Busch Beer" />
          </Link>
          <Link exact className="all-links" to="/Castle">
            <img className="logos" src={castle_logo} alt="Castle Beer" />
          </Link>
          <Link exact className="all-links" to="/Corona">
            <img className="logos" src={corona_logo} alt="Corona Beer" />
          </Link>
        </div>
      </div>
    );
  }
}
