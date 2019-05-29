import React from 'react';
// import {Link} from 'react-router-dom';
import BM from './hamburgermenu.png';

const Navbar = () => {
    return(
        <nav className="Nav-bq">         
            <p className="Order-Details">Detalle de orden</p>
            <a className="Nav-bq-menu"><img src={BM} className="Bmenu" alt="bm"></img></a>
    </nav>

);
    }
export default Navbar;