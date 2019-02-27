import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
//containers
import ListaContainer from './containers/lista_container';


class App extends Component {

    render(){
       return (
           <div>
               <Switch>
                   <Route exact={true} path='/' component={ListaContainer}/>
               </Switch>
           </div>
       )
    }
}

export default App;