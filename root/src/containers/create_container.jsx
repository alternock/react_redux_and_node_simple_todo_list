import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//actions
import { addAction } from '../../app/redux/actions/user_action';
//components
import CreateForm from '../components/create_form';



class CreateContainer extends Component {

    constructor(props) {
        super(props);
    }

    _view() {
        return (
            <div className="ma4">
                <CreateForm funcAddUser={this.props._addUser} />
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


let mapDispatchToProps = (dispatch) => {
    return {
        _addUser: (User) => {
            dispatch(addAction(User));
        }
    }
};


export default withRouter(connect(null, mapDispatchToProps)(CreateContainer));