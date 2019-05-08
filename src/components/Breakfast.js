import React from 'react';
import {Link} from 'react-router-dom';

let hour = new Date().getHours();


if(hour >= 5 && hour < 12) {
console.log('esto es desayuno ' + hour + ' am');
} else {
  console.log('es comida')
}

const Breakfast = () => (

    <div className="main-content">
        <div className="container">
            <h2>BREAKFAST PAGE</h2>
            <ul className='nav-menu'>
            <li><Link className="nav-menu__link" to="/breakfast/food">Alimentos</Link></li>
            {/* <li><Link className="nav-menu__link" to="/breakfast-drinks">Comidas</Link></li>
            <li><Link className="nav-menu__link" to="/Ticket">Cuenta</Link></li> */}
        </ul>
        </div>
    </div>
);

export default Breakfast;