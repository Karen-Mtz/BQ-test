import React from 'react';
import Data from './data.json';

let complements = Data.filter(Data => Data.type === 'complements')

const Complements = (props) => (
    <div className="main-content">
        <div className="container">
        {complements.map((complements, index) => {
    return <button className="Box" key={index}>{complements.item}</button>
 })}
        </div>
    </div>
);

export default Complements;