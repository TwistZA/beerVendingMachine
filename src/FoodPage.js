import React, { Component } from "react";
import Food from "./Food.js";
import "./FoodPage.css";

export default class FoodPage extends Component {
  static defaultProps = {
    foods: [
      "pasta",
      "eggs",
      "curry",
      "sausage",
      "biryani",
      "fried chicken",
      "fried fish",
      "bacon",
      "ice cream",
      "meatballs",
      "burger",
      "hot dog",
    ],
  };
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let foodArray = Array.from(this.props.foods);
    console.log(foodArray);

    return (
      <div>
        <h4>Food Page</h4>
        <div className="foodpageContainer">
          {foodArray.map((item) => {
            return <Food name={item} />;
          })}
          {/* <Food name="cake" />
          <Food name="curry" />
          <Food name="sausage" /> */}
        </div>
      </div>
    );
  }
}
