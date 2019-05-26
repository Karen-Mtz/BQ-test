import React from 'react';



export default class Details extends React.Component {
    
    render() {
        return (
            <section className="Ticket-details">
                <div>
        <h3 className="Ticket-details-h">Cantidad    Descripción    Monto</h3>
        </div>
        {this.props.ticketElements.map(element =>(
            <div key={element.id}>
             <h3 className="Ticket-details-h">{element.value}    {element.item}    $ {element.price}</h3>
           </div>))}
        
</section>
        );
    }}
    