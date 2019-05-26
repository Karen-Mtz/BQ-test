import React from 'react';
import Data from './data.json';

let breakfastFood = Data.filter(Data => Data.type === 'breakfast food')

export default class Breakfastfood extends React.Component {
    state = { breakfastFood: []};

    renderBtns = () =>
    breakfastFood.map(food => (
            // Pass parameters in'div_id' and div_name data attributes
                    <button
                        className="Box"
                        onClick={()=>this.handleDivClicked(food)}
                        key={food.id}
                        data-div_id={food.item}
                        data-div_name={`Precio: ${food.price}`}
                    >

                        <img className="btn-img" src={food.img} alt="food" />
                        <p className="btn-name">{food.item}
                            <p className="btn-price">${food.price}</p>
                        </p>
                    </button>
        ));

    handleDivClicked = item => {
        this.setState({
            // Retrieve the passed parameters from 'div_id' and 'div_name' datasets
            //message: `${ev.currentTarget.dataset.div_id},  ${
            //    ev.currentTarget.dataset.div_name
            //    }`,
            breakfastFood: [...this.state.breakfastFood, item]  
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

// const Breakfastfood = (props) => (
//     <div className="main-content">
//         <div className="container">
//             {breakfastFood.map((breakfastFood, index) => {
//                 return <button className="Box" key={index}>
//                     <img className="btn-img" src={breakfastFood.img} />
//                     <p className="btn-name">{breakfastFood.item}
//                     <p className="btn-price">${breakfastFood.price}</p>
//                     </p>
//                     </button>
//             })}

//         </div>
//     </div>
// );




// export default Breakfastfood;