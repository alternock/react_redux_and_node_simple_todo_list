import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';


class LinkForm extends Component{

    constructor(props){
        super(props);
    }

    _link(){
        return(
           <div className="ma4">
               <Link to="/add"><button type="button" className="btn btn-lg btn-success">ADD USER</button></Link>
               <Link to="/get"><button type="button" className="btn btn-lg btn-info mh2">GET USERS</button></Link>
               <Link to="/delete"><button type="button" className="btn btn-lg btn-danger">DELETE USER</button></Link>
           </div>   
        )
    }

    render(){
        return(
            <div>
               {this._link()}
            </div>
        )
    }

};

export default withRouter(LinkForm);