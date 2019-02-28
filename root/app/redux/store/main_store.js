import {createStore, combineReducers, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
//reducers
import UserStore from '../reducers/users_reducer';


let reducer = combineReducers({
    UserStore
});


let store = createStore(reducer, applyMiddleware(Thunk));


export default store;