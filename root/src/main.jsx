import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
//APP
import App from './app';


const ROOT = document.getElementById('root');
const HISTORY = createBrowserHistory();

ReactDOM.render(
    <Router history={HISTORY}>
        <App/>
    </Router>,
    ROOT
);