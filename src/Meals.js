import React from 'react';
import Data from './data.json';

let burgers = Data.filter((Data) => {
    return Data.type === "meals";
}) 
console.log(burgers[0].item);

const Meals = (props) => (
    <div className="main-content">
        <div className="container">
        </div>
    </div>
);

export default Meals;