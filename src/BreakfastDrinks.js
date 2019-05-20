import React from 'react';
import Data from './data.json';

let breakfastDrinks = Data.filter(Data => Data.type === 'breakfast drinks')

const BreakfastDrinks = () => (
    <div className="main-content">
        <div className="container">
            {breakfastDrinks.map((breakfastDrinks, index) => {
                return <button className="Box" key={index}>
                    <img className="btn-img" src={breakfastDrinks.img} />
                    <p className="btn-name">{breakfastDrinks.item}
                    <p className="btn-price">${breakfastDrinks.price}</p>
                    </p>
                    </button>
            })}
        </div>
    </div>
);

export default BreakfastDrinks;