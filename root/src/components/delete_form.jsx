import React, {Component} from 'react';
import PropTypes from 'prop-types';


class DeleteForm extends Component{
 
    constructor(props){
        super(props);

        this._handleInput = this._handleInput.bind(this);
        this._deleteUser = this._deleteUser.bind(this);

        this.state ={
            correo:''
        };
    }

    _handleInput(evt){
        let Obj = {};

        Obj[evt.target.name] = evt.target.value;

        this.setState(Obj);
    }

    _deleteUser(){
        let correo = this.state.correo;

        this.props.funcDeleteUser(correo);

        this.setState({
            correo:''
        });
    }

    _form(){
        let correo = this.state.correo;

        return(
            <div>
                <section className="row">
                    <article className="col-md-6">
                        <div className="form-group">
                            <label>correo</label>
                            <input type="text" className="form-control" name="correo" value={correo} onChange={this._handleInput} />
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-lg btn-danger" onClick={this._deleteUser}>delete</button>
                        </div>
                    </article>
                </section>
            </div>
        )
    }

    render(){
        return (
            <div>
               {this._form()}  
            </div>
        )
    }

};

DeleteForm.propTypes = {
    funcDeleteUser: PropTypes.func.isRequired
};



export default DeleteForm;