import React from 'react';
import Modal from 'react-awesome-modal';


export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section className="Ticket-details">
                 <h3 className="Ticket-details-h">Cantidad    Descripción    Monto</h3>
                 <button className="New-order" value="Open" onClick={() => this.openModal()}>NUEVA ORDEN</button>
                <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1>Nombre del cliente</h1>
                        <input type="text"></input>
                        <br></br><br></br>
                        <button className="Yellow">CONTINUAR</button>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}

