import React from 'react';
import InputNumeric from 'react-input-numeric';

export default class DrinksItem extends React.Component {
state = {
  value: 0
};
render() {
  const { drink, handleProductClicked, updateQuantity } = this.props;
return (
<object className="Box" key={drink.id}>
        <img
          className="btn-img"
          src={drink.img}
          alt="drink"
          onClick={() => handleProductClicked(drink)}
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
          onChange={value => this.setState({ value }, 
            updateQuantity(drink, value))}
        />
      </object>);
}
      }