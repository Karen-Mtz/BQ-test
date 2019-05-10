import React from 'react';
import {Link} from 'react-router-dom';

let hour = new Date().getHours();


const Menu = () => {
    if (hour >= 5 && hour < 12) {
    return (
        <div className="Main-menu">
            <nav>
            <ul>
                <li className='Nav-food-and-drinks'><Link className="nav-menu__link" to="/breakfastfood"><a>Alimentos</a></Link></li> 
                <li className='Nav-food-and-drinks'><Link className="nav-menu__link" to="/breakfastdrinks"><a>Bebidas</a></Link></li>
            </ul>
            <hr />
            </nav>
            </div>
        );
    } else {
        return (
            <div className="Main-menu">
                <nav>
            <ul>
            <li className='Nav-food-and-drinks'><Link className="nav-menu__link" to="/meals"><a>Alimentos</a></Link></li>
            
            <li className='Nav-food-and-drinks'><Link className="nav-menu__link" to="/drinks"><a>Bebidas</a></Link></li>
            
            <li className='Nav-food-and-drinks'><Link className="nav-menu__link" to="/complements"><a>Complementos</a></Link></li>                
            </ul>
            </nav>
            <hr />
        </div>
        );
    }; 
};


export default Menu;