import React from 'react';
import Data from './data.json';

let breakfastDrinks = Data.filter(Data => Data.type === 'breakfast drinks')

const BreakfastDrinks = () => (
    <div className="main-content">
        <div className="container">
        {breakfastDrinks.map((breakfastDrinks, index) => {
    return <button className="Box" key={index}>{breakfastDrinks.item}</button>
 })}
        </div>
    </div>
);

export default BreakfastDrinks;