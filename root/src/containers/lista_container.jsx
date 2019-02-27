import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//components
import Lista from '../components/lista';


class ListaContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let lista = [
            { nombre: 'pepe', correo: 'pepe@gmail.com' },
            { nombre: 'juan', correo: 'juan@gmail.com' },
            { nombre: 'vanessa', correo: 'vanessa@gmail.com' }
        ];

        return (
            <Lista lista={lista} />
        )
    }
}

export default withRouter(ListaContainer);