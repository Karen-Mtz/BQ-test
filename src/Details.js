import React from 'react';



export default class Details extends React.Component {
    state = {
        total: 0
    }

    changeTotal = price => {
      
    console.log(this.props.ticketElements.map(element => (
        element.price
    )))
    }
    
    render() {
        return (
           
            <section className="Ticket-details">
                 {this.changeTotal()}
                <div>
        <h3 className="Ticket-details-h">Cantidad    Descripción    Monto</h3>
        </div>
        <h3>{this.props.products}</h3>
        {this.props.ticketElements.map(element =>(
            <div key={element.id}>
             <h3 className="Ticket-details-h"> {element.item}    $ {element.price}</h3>
           </div>))}
<h1>TOTAL:  </h1>
        
</section>
        );
    }}
    