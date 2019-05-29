import React from "react";
import InputNumeric from "react-input-numeric";



export default class MealstsItem extends React.Component {
  state = {
    value: 0
  };
  render() {
    const { burger, handleProductClicked, updateQuantity } = this.props;
    return (<object className="Box" key={burger.id}>
      <img className="btn-img" src={burger.img} alt="burger" onClick={() => handleProductClicked(burger)} />
      <p className="btn-name">
        {burger.item}
        <span className="btn-price">
          <br />${burger.price}
        </span>
      </p>
      <InputNumeric className="btn-input" value={this.state.value} 
      onChange={value => this.setState({ value }, 
      updateQuantity(burger, value))}
       />
    </object>);
  }
}
