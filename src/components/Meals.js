import React from 'react';
import Data from './data.json';

const Meals = (props) => (
    <div className="main-content">
        <div className="container">
            {Data.map((product, index) => {
                console.log(Data)
                return (
                    <p>{Data.item}</p>
                )
            })}
        </div>
    </div>
);

export default Meals;