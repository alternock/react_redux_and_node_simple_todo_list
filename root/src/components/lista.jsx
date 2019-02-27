import React, { Component } from 'react';


function TagLI(props) {
    return (
        <li key={props.key}>
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

export default Lista;