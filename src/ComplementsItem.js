import React from "react";
import InputNumeric from "react-input-numeric";



export default class ComplementsItem extends React.Component {
  state = {
    value: 0
  };
  render() {
    const { complement, handleProductClicked, updateQuantity } = this.props;
    return (<object className="Box" key={complement.id}>
      <img className="btn-img" src={complement.img} alt="complement" onClick={() => handleProductClicked(complement)} />
      <p className="btn-name">
        {complement.item}
        <span className="btn-price">
          <br />${complement.price}
        </span>
      </p>
      <InputNumeric className="btn-input" value={this.state.value} 
      onChange={value => this.setState({ value }, 
      updateQuantity(complement, value))}
       />
    </object>);
  }
}
