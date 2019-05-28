import React from "react";
import Data from "./data.json";
import ComplementsItem from './ComplementsItem';


let complements = Data.filter(Data => Data.type === "complements");

export default class Complements extends React.Component {
  state = {
    complements: [],
  };
  renderBtns = () =>
    complements.map((complement, index) => (
      <ComplementsItem
           key={index}
          complement={complement}
          handleProductClicked={this.handleProductClicked} 
          updateQuantity={this.updateQuantity}
      />
    ));
  handleProductClicked = (item) => {
    this.setState({
      complements: [...this.state.complements, item],
    });
    console.log(item.price);
    this.props.addToTicket(item);
  };
  updateQuantity = (item, value) => {
    item.quantity = value
    this.props.addQuantity(item);
  };
  render() {
    return (
      <div className="main-content">
        <div className="container">{this.renderBtns()}</div>
      </div>
    );
  }
}
