import React from "react";
import Data from "./data.json";
import InputNumeric from "react-input-numeric";

let complements = Data.filter(Data => Data.type === "complements");

export default class Complements extends React.Component {
  state = {
    complements: [],
    value: 0
  };
  renderBtns = () =>
    complements.map(complement => (
      <object className="Box" key={complement.id}>
        <img
          className="btn-img"
          src={complement.img}
          alt="complement"
          onClick={() => this.handleProductClicked(complement)}
        />
        <p className="btn-name">
          {complement.item}
          <span className="btn-price">
            <br />${complement.price}
          </span>
        </p>
        <InputNumeric
          className="btn-input"
          value={this.state.value}
          onChange={this.updateQuantity}
          id={complement.id}
        />
      </object>
    ));

  handleProductClicked = item => {
    this.setState({
      complements: [...this.state.complements, item],
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
