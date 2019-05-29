import React from "react";
import Data from "./data.json";
import ComplementsItem from './ComplementsItem';


let complements = Data.filter(Data => Data.type === "complements");

export default class Complements extends React.Component {
  state = {
    complements: [],
    bill: 0
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
    this.props.addToTicket(item);
  };
  updateQuantity = (item, value) => {
    item.quantity = value
    this.props.addQuantity(item);
  };

  total = () => {
    let elements = this.state.complements
    let t = elements.map(element => (
      element.price*element.quantity))
      if(t.length >=1) {
 let total= t.reduce((a,b) => a + b)
 return (
   <object className="Box-total">Total: <span className="price">${total}</span ></object>
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
