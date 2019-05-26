import React from 'react';
import Data from './data.json';
import InputNumeric from 'react-input-numeric';


let burgers = Data.filter(Data => Data.type === 'meals')

export default class Meals extends React.Component {
    state = { burgers: [],
        value: 0
   };
    
    renderBtns = () =>
        burgers.map(burger => (
                    <object
                        className="Box"
                        onClick={()=>this.handleDivClicked(burger)}
                        key={burger.id}
                    >

                        <img className="btn-img" src={burger.img} alt="burger" />
                        <p className="btn-name">{burger.item} </p>
                            <p className="btn-price"><br /> ${burger.price}</p>

                            <InputNumeric
  value={this.state.value}
  onChange={this.updateQuantity}
/>

                    </object>
        ));

    handleDivClicked = item => {
        this.setState({
            burgers: [...this.state.burgers, item],  
           
           
        });
        this.props.addToTicket(item);

    };

    updateQuantity = (e) => {
        this.setState ({
            value: e.value     
        });
    }

    render() {
        return (
            <div className="main-content">
                <div className="container">
                {this.renderBtns()}
                    </div>
                    </div>
        )
    }
}
