import React from "react";
import Data from "./data.json";
import InputNumeric from "react-input-numeric";

let drinks = Data.filter(Data => Data.type === "drinks");

export default class Drinks extends React.Component {
  state = {
    drinks: [],
    value: 0
  };
  renderBtns = () =>
    drinks.map(drink => (
      <object className="Box" key={drink.id}>
        <img
          className="btn-img"
          src={drink.img}
          alt="drink"
          onClick={() => this.handleProductClicked(drink)}
        />
        <p className="btn-name">
          {drink.item}
          <span className="btn-price">
            <br />${drink.price}
          </span>
        </p>
        <InputNumeric
          className="btn-input"
          value={this.state.value}
          onChange={this.updateQuantity}
          id={drink.id}
        />
      </object>
    ));

  handleProductClicked = item => {
    this.setState({
      drinks: [...this.state.drinks, item],
      value: 1
    });
    console.log(item);
    this.props.addToTicket(item);
  };
  updateQuantity = e => {
    this.setState({
      value: e.value
    });
    console.log(e);
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
