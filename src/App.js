import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './css/style.css';
import Home from "./Home";
// import Login from "./Login";
import { AuthProvider } from "./Auth";
// import PrivateRoute from "./PrivateRoute";
import Navbar from './Navbar';
import Details from './Details';
import Meals from './Meals';
import Drinks from './Drinks';
import Complements from './Complements';
import Breakfastfood from './Breakfastfood';
// import Menu from './Menu';
import BreakfastDrinks from './BreakfastDrinks';



class App  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTicket: [],
      quantity: 0,
      bill: 0
    };
  }

  handleAddTicket (item) {
    this.setState({
      currentTicket: [...this.state.currentTicket, item]
    })
  }

  handleAddQuantity (quantity) {
    this.setState ({
      quantity
    })
  }

  handleTotal (bill) {
    this.setState ({
      bill
    })
  }

  render () {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Home />
          <Details ticketElements={this.state.currentTicket} products={this.state.quantity} bill={this.state.bill}/>
          <Route exact path="/meals" render={(props) => <Meals {...props} addToTicket={this.handleAddTicket.bind(this)} addQuantity={this.handleAddQuantity.bind(this)} />}/>
          <Route exact path="/breakfastfood" render={(props) => <Breakfastfood {...props} addToTicket={this.handleAddTicket.bind(this)} addQuantity={this.handleAddQuantity.bind(this)} />}/>
          <Route exact path="/breakfastdrinks" render={(props) => <BreakfastDrinks {...props} addToTicket={this.handleAddTicket.bind(this)} addQuantity={this.handleAddQuantity.bind(this)}/>} />
          <Route exact path="/drinks" render={(props)=> <Drinks {...props} addToTicket={this.handleAddTicket.bind(this)} addQuantity={this.handleAddQuantity.bind(this)}/> } />
          <Route exact path="/complements" render={(props) => <Complements {...props} addToTicket={this.handleAddTicket.bind(this)} addQuantity={this.handleAddQuantity.bind(this)} /> } />
        </div>
      </Router>
    </AuthProvider>
  );
  };
};

export default App;

