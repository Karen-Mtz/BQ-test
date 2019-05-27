import React from "react";
import Data from "./data.json";
import InputNumeric from "react-input-numeric";

let breakfastFood = Data.filter(Data => Data.type === "breakfast food");

export default class Breakfastfood extends React.Component {
  state = {
    breakfastFood: [],
    value: 0
  };
  renderBtns = () =>
    breakfastFood.map(food => (
      <object className="Box" key={food.id}>
        <img
          className="btn-img"
          src={food.img}
          alt="food"
          onClick={() => this.handleProductClicked(food)}
        />
        <p className="btn-name">
          {food.item}
          <span className="btn-price">
            <br />${food.price}
          </span>
        </p>
        <InputNumeric
          className="btn-input"
          value={this.state.value}
          onChange={this.updateQuantity}
          id={food.id}
        />
      </object>
    ));

  handleProductClicked = item => {
    this.setState({
      breakfastFood: [...this.state.breakfastFood, item],
      value: 1
    });
    console.log(item);
    this.props.addToTicket(item);
  };
  updateQuantity = e => {
    this.setState({
      value: e.value
    });
    console.log(this.state.value);
    this.props.addQuantity(e);
  };
  render() {
    return (
      <div className="main-content">
        <div className="container">{this.renderBtns()}</div>
      </div>
    );
  }
}
