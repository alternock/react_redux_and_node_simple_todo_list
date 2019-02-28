import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//actions
import { deleteAction } from '../../app/redux/actions/user_action';
//components
import DeleteForm from '../components/delete_form';


class DeleteContainer extends Component {

    constructor(props) {
        super(props);
    }

    _view() {
        return (
            <div>
                <DeleteForm funcDeleteUser={this.props._deleteUser} />
            </div>
        )
    }

    render() {
        return (
            <div className="ma4">
                {this._view()}
            </div>
        )
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        _deleteUser: (correo) => {
            dispatch(deleteAction(correo));
        }
    }
};


export default withRouter(connect(null, mapDispatchToProps)(DeleteContainer));