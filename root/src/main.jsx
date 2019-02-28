import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
//store
import STORE from '../app/redux/store/main_store';
//APP
import App from './app';


const ROOT = document.getElementById('root');
const HISTORY = createBrowserHistory();

ReactDOM.render(
    <Provider store = {STORE}>
        <Router history={HISTORY}>
            <App />
        </Router>
    </Provider>,
    ROOT
);