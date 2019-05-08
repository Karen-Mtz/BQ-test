import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Meals from './components/Meals';
import Drinks from './components/Drinks';
import Complements from './components/Complements';
import Breakfastfood from './components/Breakfastfood';
import Menu from './components/Menu';
import BreakfastDrinks from './components/BreakfastDrinks';

//BQ

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Menu/>
    <Route exact path="/meals" component={Meals}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/breakfastfood" component={Breakfastfood}/>
    <Route exact path="/breakfastdrinks" component={BreakfastDrinks}/>
    <Route exact path="/drinks" component={Drinks}/>
    <Route exact path="/complements" component={Complements}/>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
