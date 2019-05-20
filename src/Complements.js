import React from 'react';
import Data from './data.json';



let complements = Data.filter(Data => Data.type === 'complements')


const Complements = (props) => (
    <div className="main-content">
        <div className="container">
            {complements.map((complements, index) => {
                return <button className="Box" key={index}>
                    <img className="btn-img" src={complements.img} />
                    <p className="btn-name">{complements.item}
                    <p className="btn-price">${complements.price}</p>
                    </p>
                    </button>
            })}
        </div>
    </div>
);

export default Complements;