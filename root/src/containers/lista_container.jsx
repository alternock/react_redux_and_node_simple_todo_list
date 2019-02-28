import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//actions
import {addAction} from '../../app/redux/actions/user_action';
//components
import Lista from '../components/lista';


class ListaContainer extends Component {

    constructor(props) {
        super(props);
    }

    _view(){
        return(
            <div className="ma4">
                <Lista lista={this.props._usuarios} />
            </div>
        )
    }

    render() {
        return (
            <div>                                 
                {this._view()}
            </div>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        _usuarios: state.UserStore
    }
};

export default withRouter(connect(mapStateToProps, null)(ListaContainer));