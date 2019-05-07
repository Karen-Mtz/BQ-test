import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

const Breakfast = (props) => (
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