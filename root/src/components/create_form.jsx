import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CreateForm extends Component {
    constructor(props) {
        super(props);

        this._handleInput = this._handleInput.bind(this);
        this._addUser = this._addUser.bind(this);

        this.state = {
            nombre: '',
            correo: ''
        };
    }

    _handleInput(evt) {
        let Obj = {};

        Obj[evt.target.name] = evt.target.value;
        this.setState(Obj);
    }

    _addUser() {
        let { nombre, correo } = this.state;
        let User = {
            nombre,
            correo
        };

        this.props.funcAddUser(User);

        this.setState({
            nombre: '',
            correo: ''
        });
    }

    _form() {
        let { nombre, correo } = this.state;

        return (
            <div>
                <section className="row">
                    <article className="col-md-6">
                        <div className="form-group">
                            <label>nombre</label>
                            <input type="text" className="form-control" name="nombre" value={nombre} onChange={this._handleInput} />
                        </div>
                        <div className="form-group">
                            <label>correo</label>
                            <input type="text" className="form-control" name="correo" value={correo} onChange={this._handleInput} />
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-lg btn-success" onClick={this._addUser}>add</button>
                        </div>
                    </article>
                </section>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this._form()}
            </div>
        )
    }
};


CreateForm.propTypes = {
    funcAddUser: PropTypes.func.isRequired
};


export default CreateForm;