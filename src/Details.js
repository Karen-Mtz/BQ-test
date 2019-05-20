import React from 'react';
import Meals from './Meals';





export default class Details extends React.Component {
    render() {
        return (
            <section className="Ticket-details">
                <div>
        <h3 className="Ticket-details-h">Cantidad    Descripción    Monto</h3>
        </div>
        {this.props.ticketElements.map(element =>(
           <div>
             <h3 className="Ticket-details-h">1    {element.item}    $ {element.price}</h3>
           </div>))}
        
</section>
        );
    }}
