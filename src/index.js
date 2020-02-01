import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //redux 2
import {createStore, applyMiddleware, combineReducers} from "redux"; //redux 1
import {createLogger} from 'redux-logger'; //redux 3
import thunkMiddleware from 'redux-thunk'; //redux 4
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {searchRobots, requestRobots} from "./reducers"; //redux 2
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
