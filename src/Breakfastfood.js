import React from 'react';
import Data from './data.json';

let breakfastFood = Data.filter(Data => Data.type === 'breakfast food')


const Breakfastfood = (props) => (
    <div className="main-content">
        <div className="container">
            {breakfastFood.map((breakfastFood, index) => {
                return <button className="Box" key={index}>
                    <img className="btn-img" src={breakfastFood.img} />
                    <p className="btn-name">{breakfastFood.item}
                    <p className="btn-price">${breakfastFood.price}</p>
                    </p>
                    </button>
            })}

        </div>
    </div>
);


export default Breakfastfood;