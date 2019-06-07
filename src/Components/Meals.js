import React from "react";
import Data from "./data.json";
import MealsItems from './MealsItems';

let burgers = Data.filter(Data => Data.type === "meals");
/* Filtrando data del json */

/* Creando y exportando componente de clase */
export default class Meals extends React.Component {
  /* Fijando estado inicial con un array burgers 
que se llenará cuando se seleccione el producto
ese array pasará como prop al componente ticket
y con un value 0 que igual será prop para ticket */
  state = {
    burgers: [],
    bill: 0,
  };
  /* Función que se ejecutará cuando se renderise
    el componente, esta obtendrá datos del json y 
    pintará los botones de los productos */
  renderBtns = () =>
    burgers.map((burger, index) => (
      <MealsItems
      key={index}
      burger={burger}
      handleProductClicked={this.handleProductClicked}
      updateQuantity={this.updateQuantity}
      />
    ));
  /* Función para determinar qué producto fue seleccionado
        y agregarlo al array burgers para hacer un nuevo estado */
  handleProductClicked = item => {
    this.setState({
      burgers: [...this.state.burgers, item],
      /*no entiendo por qué tres puntos*/
    });
    this.props.addToTicket(item);
    /* Creando los props para el componente 
            ticket con la función addToTicket con 
            el item clickeado pasará como objeto*/
  };
  /* Función para aumentar la cantidad de productos
        con el input number igual será prop que recibirá
        el componente ticket para sumar el total. Esta 
        función modifica el estado inicial de value */
  updateQuantity = (item, value) => {
    item.quantity = value
    this.props.addQuantity(item);
  };
   total = () => {
     let elements = this.state.burgers
     let t = elements.map(element => ( 
       element.price*element.quantity))
       if(t.length >=1) {
         let total = t.reduce((a,b) => a+b)
         return (
           <object className = "Box-total">Total: <span className="price">${total}</span></object>
         )
       }
      }
  /* Renderizando componente llamando a 
        la función renderBtns para pintarlos en el div*/
  render() {
    return (
      <div className="main-content">
        {this.total()}
        <article className="container">{this.renderBtns()}</article>
      </div>
    );
  }
}