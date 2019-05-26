import React from 'react';
import Modal from 'react-awesome-modal';




export default class NewOrder extends React.Component {
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
            <section>
                <p className="client-name">{this.state.value}</p>
                <button className="New-order" value="Open" onClick={() => this.openModal()}>NUEVA ORDEN</button>
                <Modal
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Nombre del cliente:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <input type="submit" className="Yellow" value="CONTINUAR"  onClick={() => this.closeModal()} />
                        </form>
                    </div>
                </Modal>
            </section>
        );
    }
}


