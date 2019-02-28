import React, { Component } from 'react';
import PropTypes from 'prop-types';


function TagLI(props) {
    return (
        <li>
            <p>
                <label>
                    nombre:
                </label>
                <label>
                    {props.nombre}
                </label>
            </p>
            <p>
                <label>
                    correo:
                </label>
                <label>
                    {props.correo}
                </label>
            </p>
        </li>
    )
}


class Lista extends Component {

    constructor(props) {
        super(props);
    }

    _lista() {
        return (
            <div>
                <ul>
                    {this.props.lista.map((items, i) => {
                        return (
                            <TagLI key={i} nombre={items.nombre} correo={items.correo} />
                        )
                    })}
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this._lista()}
            </div>
        )
    }

}

Lista.propTypes = {
    lista: PropTypes.array.isRequired
};

export default Lista;