import React from 'react';
import Data from './data.json';

class BreakfastDrinks extends React.Component {
    render () {
        return (
            <div className="main-content">
            <div className="container">
            {Data.map((product, index) => {
            return(
                <p className="Box">{Data.item}</p>
            )
        })} 
        </div>
    </div>
);
        
    }
}

export default BreakfastDrinks;