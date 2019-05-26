import React from 'react';
// import {Link} from 'react-router-dom';
import BM from './hamburgermenu.png';

const Navbar = () => {
    return(
        <nav className="Nav-bq">         
            <h2 className="Order-Details">Detalle de orden</h2>
            <a className="Nav-bq-menu" href="/"><img src={BM} className="Bmenu" alt="bm"></img></a>
    </nav>

);
    }
export default Navbar;