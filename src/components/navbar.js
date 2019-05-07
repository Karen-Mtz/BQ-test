import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => (
    <nav>
        <h2 className='logo'>{props.title}</h2>
        <ul className='nav-menu'>
            <li><Link className="nav-menu__link" to="/breakfast">Desayunos</Link></li>
            <li><Link className="nav-menu__link" to="/meals">Comidas</Link></li>
            <li><Link className="nav-menu__link" to="/Ticket">Cuenta</Link></li>
        </ul>
    </nav>
);

export default Navbar;