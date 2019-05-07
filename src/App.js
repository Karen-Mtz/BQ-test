import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Breakfast from './components/Breakfast';
import Meals from './components/Meals';
import Breakfastfood from './components/Breakfastfood';

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
    <div className="App">
    <Navbar title="Burger Queen" />
    <Route exact path="/" render={() => <Home title="-- BURGER QUEEN --"/>}/>
    <Route exact path="/breakfast" component={Breakfast}/>
    <Route exact path="/meals" component={Meals}/>
    <Route exact path="/breakfast/food" component={Breakfastfood}/>
    </div>
    </BrowserRouter>
  );
}
}


export default App;
