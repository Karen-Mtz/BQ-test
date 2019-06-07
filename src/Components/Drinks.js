import React from "react";
import Data from "./data.json";
import DrinksItem from "./DrinksItem";

let drinks = Data.filter(Data => Data.type === "drinks");

export default class Drinks extends React.Component {
  state = {
    drinks: [],
    bill: 0
  };
  renderBtns = () =>
    drinks.map((drink, index) => (
      <DrinksItem
      key={index}
      drink={drink}
      handleProductClicked={this.handleProductClicked}
      updateQuantity={this.updateQuantity}
      />
    ));

  handleProductClicked = item => {
    this.setState({
      drinks: [...this.state.drinks, item],
      });
    this.props.addToTicket(item);
  };
  updateQuantity = (item,value) => {
    item.quantity = value
    this.props.addQuantity(item);
  };
  total = () => {
    let elements = this.state.drinks
    let t = elements.map(element => (
      element.price*element.quantity))
      if(t.length >=1) {
        let total = t.reduce((a,b) => a+b)
        return (
          <object className="Box-total">Total: <span className="price">${total}</span></object>
        )
      }
  }
  render() {
    return (
      <div className="main-content">
        {this.total()}
        <article className="container">{this.renderBtns()}</article>
      </div>
    );
  }
}
