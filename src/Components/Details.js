import React from 'react';
import Modal from 'react-awesome-modal';



export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            value: ""

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
           
            <section className="Ticket-details">
               
                
        <table className="Detail">
            <tbody>
            <tr className="Ticket-details-h"> 
                <td>Cantidad</td>
                <td>Descripción</td>
                <td>Monto</td>
        </tr>
        </tbody>
        </table>
       
        <p className="client-name">{this.state.value}</p>
        
        {this.props.ticketElements.map(element =>(
            <div key={element.id}>
                <object className="box-ticket">
                    <p className="ticket-text"> {element.quantity} {element.item} <span className="btn-price">${element.price*element.quantity  }</span> </p>
                </object>
           </div>))} 

          

            
           
            <button className="btn-new-order New-order" value="Open" onClick={() => this.openModal()}>NUEVA ORDEN</button>
            <Modal
                visible={this.state.visible}
                width="400"
                height="300"
                effect="fadeInUp"
                onClickAway={() => this.closeModal()}
            >
                <div>
                    <form onSubmit={this.handleSubmit} className="modal-name">
                        <label>
                           <p className="modal-p">Nombre del cliente</p>
      <input className="modal-input" type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" className="Yellow" value="CONTINUAR"  onClick={() => this.closeModal()} />
                    </form>
                </div>
            </Modal>
    
        </section>
        );
    }}
    