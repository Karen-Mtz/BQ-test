import React from 'react';
import Data from './data.json';

let breakfastDrinks = Data.filter(Data => Data.type === 'breakfast drinks')

export default class BreakfastDrinks extends React.Component {
    state = { breakfastDrinks: []};

    renderBtns = () =>
    breakfastDrinks.map(bfDrink => (
            // Pass parameters in'div_id' and div_name data attributes
                    <button
                        className="Box"
                        onClick={()=>this.handleDivClicked(bfDrink)}
                        key={bfDrink.id}
                        data-div_id={bfDrink.item}
                        data-div_name={`Precio: ${bfDrink.price}`}
                    >

                        <img className="btn-img" src={bfDrink.img} alt="drink"/>
                        <p className="btn-name">{bfDrink.item}
                            <p className="btn-price">${bfDrink.price}</p>
                        </p>
                    </button>
        ));

    handleDivClicked = item => {
        this.setState({
            // Retrieve the passed parameters from 'div_id' and 'div_name' datasets
            //message: `${ev.currentTarget.dataset.div_id},  ${
            //    ev.currentTarget.dataset.div_name
            //    }`,
            breakfastDrinks: [...this.state.breakfastDrinks, item]  
        });
        this.props.addToTicket(item);
    };

    render() {
        return (
            <div className="main-content">
                <div className="container">
                {this.renderBtns()}
                
                {this.state.message && (
                    <div className="alert alert-primary">{this.state.message}</div>
                    )}
                    </div>
                    </div>
        )
    }
}

// const BreakfastDrinks = () => (
//     <div className="main-content">
//         <div className="container">
//             {breakfastDrinks.map((breakfastDrinks, index) => {
//                 return <button className="Box" key={index}>
//                     <img className="btn-img" src={breakfastDrinks.img} />
//                     <p className="btn-name">{breakfastDrinks.item}
//                     <p className="btn-price">${breakfastDrinks.price}</p>
//                     </p>
//                     </button>
//             })}
//         </div>
//     </div>
// );

// export default BreakfastDrinks;