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
      
        <table className="Detail">
            <tbody>
            <tr className="Ticket-details-h"> 
                <td>Cantidad</td>
                <td>Descripción</td>
                <td>Monto</td>
        </tr>
        </tbody>
        </table>
        </div>
       
        {this.props.ticketElements.map(element =>(
            <div key={element.id}>
                <object className="Box-ticket">
                    <p className="ticket-text"> {this.props.products} {element.item} <span className="btn-price">${element.price}</span> </p>
                </object>
           
           </div>))}
            
        
</section>
        );
    }}
    