import React from "react";
import Data from "./data.json";
import InputNumeric from "react-input-numeric";

let breakfastDrinks = Data.filter(Data => Data.type === 'breakfast drinks');

export default class BreakfastDrinks extends React.Component {
  state = {
    breakfastDrinks: [],
    value: 0
  };
  renderBtns = () =>
  breakfastDrinks.map(bfDrink => (
      <object className="Box" key={bfDrink.id}>
        <img
          className="btn-img"
          src={bfDrink.img}
          alt="bfDrink"
          onClick={() => this.handleProductClicked(bfDrink)}
        />
        <p className="btn-name">{bfDrink.item} 
        <span className="btn-price">
          <br />${bfDrink.price}
        </span>
        </p>
        <InputNumeric
          className="btn-input"
          value={this.state.value}
          onChange={this.updateQuantity}
          id={bfDrink.id}
        />
      </object>
    ));

  handleProductClicked = item => {
    this.setState({
        breakfastDrinks: [...this.state.breakfastDrinks, item],
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
