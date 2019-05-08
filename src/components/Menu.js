import React from 'react';

let hour = new Date().getHours();
const Menu = () => {
    if (hour >= 5 && hour < 12) {
        return (
            <nav>
                <ul className='nav-food-and-drinks'>
                    <li>Alimentos</li>
                    <li>Bebidas</li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav>
                <ul className='nav-food-and-drinks'>
                    <li>Alimentos</li>
                    <li>Bebidas</li>
                    <li>Complementos</li>
                </ul>
            </nav>
        );
    };
};


export default Menu;