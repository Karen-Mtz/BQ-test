import React from 'react';
import Data from './data.json';

let breakfastFood = Data.filter(Data => Data.type === 'breakfast food')


const Breakfastfood = (props) => (
    <div className="main-content">
        <div className="container">
        {breakfastFood.map((breakfastFood, index) => {
            return <button className="Box" key={index}>{breakfastFood.item}</button>
         })}

        </div>
    </div>
);


export default Breakfastfood;