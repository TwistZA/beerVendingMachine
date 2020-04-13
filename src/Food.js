import React, { Component } from "react";
import "./Food.css";
import TitleCard from "./TitleCard.js";

export default class Food extends Component {
  render() {
    const url = `https:/source.unsplash.com/1600x900/?${this.props.name}`;
    return (
      <div className="Food">
        <TitleCard>
          <img src={url} alt={this.props.name} />
          <h2>{this.props.name}</h2>
          Info Facts
        </TitleCard>
      </div>
    );
  }
}
