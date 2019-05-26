import React from 'react';
import Data from './data.json';



let complements = Data.filter(Data => Data.type === 'complements')
 
export default class Complements extends React.Component {
    state = {
        complements: []};
        
        renderBtns = () => 
        complements.map(complement => (
            <button
            className="Box"
            onClick={()=>this.handleDivClicked(complement)}
            key={complement.id}
            data-div_id={complement.item}
            data-div_name={`Precio: ${complement.name}`}
            >
                <img className="btn-img" src={complement.img} alt="complement" />
                <p className="btn-name">{complement.item}
                <p className="btn-price">${complement.price}</p>
                </p>
            </button>
        ));

handleDivClicked = item => {
    this.setState ({
        complements: [...this.state.complements, item]
    });
    this.props.addToTicket(item);
};

render() {
    return (
        <div className="main-content">
            <div className="container">
                {this.renderBtns()}
                {this.state.message &&(
                    <div className="alert alert-primary">{this.state.message}</div>
                    )}
                    </div>
                    </div>
        )
    }
}