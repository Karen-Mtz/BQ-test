import React from 'react';
import Data from './data.json';

let drinks = Data.filter(Data => Data.type === 'drinks')

const Drinks = (props) => (
    <div className="main-content">
        <div className="container">
            {drinks.map((drinks, index) => {
                return <button className="Box" key={index}>
                    <img className="btn-img" src={drinks.img}  alt="drinks" />
                    <p className="btn-name">{drinks.item}
                    <p className="btn-price">${drinks.price}</p>
                    </p>
                    </button>
            })}
        </div>
    </div>
);

export default Drinks;