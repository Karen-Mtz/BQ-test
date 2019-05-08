import React from 'react';
import {Link} from 'react-router-dom';

let hour = new Date().getHours();


const Menu = () => {
    if (hour >= 5 && hour < 12) {
    return (
        
            <ul className='nav-food-and-drinks'>
                <li><Link className="nav-menu__link" to="/breakfastfood">Alimentos</Link></li>
                <li><Link className="nav-menu__link" to="/breakfastdrinks">Bebidas</Link></li>
            </ul>
        
        );
    } else {
        return (
            
            <ul className='nav-food-and-drinks'>
            <li><Link className="nav-menu__link" to="/meals">Alimentos</Link></li>
            <li><Link className="nav-menu__link" to="/drinks">Bebidas</Link></li>
            <li><Link className="nav-menu__link" to="/complements">Complementos</Link></li>                
            </ul>
        
        );
    }; 
};


export default Menu;