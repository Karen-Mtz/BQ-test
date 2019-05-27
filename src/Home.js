import React from "react";
// import app from "./base";
import {Link} from 'react-router-dom';
let hour = 16;

const Home = () => {
  if (hour >= 5 && hour < 12) {
    return (
        <div className="Main-menu">
            <table>
            <tbody>
            <tr>
                <td className='Nav-food-and-drinks'><Link className="nav-menu__link" to="/breakfastfood">Alimentos</Link></td>
                <td className='Nav-food-and-drinks'><Link className="nav-menu__link" to="/breakfastdrinks">Bebidas</Link></td>
                </tr>
                </tbody>
            </table>
            {/* <button onClick={() => app.auth().signOut()}>Sign out</button> */}
            </div>
        );
    } else {
        return (
            <div className="Main-menu">
                <table>
                <tbody>
                    <tr>
            <td className='Nav-food-and-drinks'><Link className="nav-menu__link" to="/meals">Alimentos</Link></td>
            <td className='Nav-food-and-drinks'><Link className="nav-menu__link" to="/drinks">Bebidas</Link></td>
            <td className='Nav-food-and-drinks'><Link className="nav-menu__link" to="/complements">Complementos</Link></td>                
            </tr>
            </tbody>
            </table>
            <hr />
            {/* <button onClick={() => app.auth().signOut()}>Sign out</button> */}
        </div>
        );
    }; 
};

export default Home;