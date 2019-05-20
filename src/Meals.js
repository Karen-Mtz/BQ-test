import React from 'react';
import Data from './data.json';

let burgers = Data.filter(Data => Data.type === 'meals')


const Meals = (props) => (
    <div className="main-content">
        <div className="container">
            {burgers.map((burgers, index) => {
                return <button className="Box" key={index}>{burgers.item}</button>
             })}
        </div>
    </div>
);

export default Meals;