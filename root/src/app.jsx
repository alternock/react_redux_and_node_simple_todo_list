import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
//components
import LinkForm from './components/link_form';
//containers
import ListaContainer from './containers/lista_container';
import CreateContainer from './containers/create_container';
import DeleteContainer from './containers/delete_container';


class App extends Component {

    render(){
       return (
           <div>
               <Switch>
                   <Route exact={true} path='/' component={LinkForm}/>
                   <Route path="/get" component={ListaContainer}/>
                   <Route path="/add" component={CreateContainer}/>
                   <Route path="/delete" component={DeleteContainer}/>
               </Switch>
           </div>
       )
    }
}

export default App;