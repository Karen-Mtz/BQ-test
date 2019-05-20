import React from 'react';
import Data from './data.json';
// import Details from './Details.js';

let burgers = Data.filter(Data => Data.type === 'meals')

export default class Meals extends React.Component {
    state = { burgers: []};

    renderBtns = () =>
        burgers.map(burger => (
            // Pass parameters in'div_id' and div_name data attributes
                    <button
                        className="Box"
                        onClick={()=>this.handleDivClicked(burger)}
                        key={burger.id}
                        data-div_id={burger.item}
                        data-div_name={`Precio: ${burger.price}`}
                    >

                        <img className="btn-img" src={burger.img} />
                        <p className="btn-name">{burger.item}
                            <p className="btn-price">${burger.price}</p>
                        </p>
                    </button>
        ));

    handleDivClicked = item => {
        this.setState({
            // Retrieve the passed parameters from 'div_id' and 'div_name' datasets
            //message: `${ev.currentTarget.dataset.div_id},  ${
            //    ev.currentTarget.dataset.div_name
            //    }`,
            burgers: [...this.state.burgers, item]  
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



// export class Meals extends React.Component {
//     render() {
//         return (
//             <div className="main-content">
//             <div className="container">
//             {burgers.map((burgers, index) => {
//                 return <button className="Box" key={index}>
//                 <img className="btn-img" src={burgers.img}/>
//                 <p className="btn-name">{burgers.item}
//                 <p className="btn-price">${burgers.price}</p>
//                 </p>
//                 </button>
//              })}
//         </div>
//     </div>
//         );
//     }
// }


// export default Meals;