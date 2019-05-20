import React from "react";
import app from "./base";
import {Link} from 'react-router-dom';
let hour = 15;

const Home = () => {
  if (hour >= 5 && hour < 12) {
    return (
        <div className="Main-menu">
            <nav>
            <ul>
                <li className='Nav-food-and-drinks'><Link className="nav-menu__link" to="/breakfastfood">Alimentos</Link></li> 
                <li className='Nav-food-and-drinks'><Link className="nav-menu__link" to="/breakfastdrinks">Bebidas</Link></li>
            </ul>
            <hr />
            </nav>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
            </div>
        );
    } else {
        return (
            <div className="Main-menu">
                <nav>
            <ul>
            <li className='Nav-food-and-drinks'><Link className="nav-menu__link" to="/meals">Alimentos</Link></li>
            
            <li className='Nav-food-and-drinks'><Link className="nav-menu__link" to="/drinks">Bebidas</Link></li>
            
            <li className='Nav-food-and-drinks'><Link className="nav-menu__link" to="/complements">Complementos</Link></li>                
            </ul>
            </nav>
            <hr />
            <button onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
        );
    }; 
};

export default Home;