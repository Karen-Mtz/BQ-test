import React from 'react';
import Data from './data.json';

let drinks = Data.filter(Data => Data.type === 'drinks')

const Drinks = (props) => (
    <div className="main-content">
        <div className="container">
{drinks.map((drinks, index) => {
    return <button className="Box" key={index}>{drinks.item}</button>
 })}
        </div>
    </div>
);

export default Drinks;