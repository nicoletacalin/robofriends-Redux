import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { requestRobots, searchRobots } from './reducers'; 
import "tachyons";

const logger = createLogger();

const rootReducers = combineReducers({ requestRobots, searchRobots })
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware,logger))

ReactDOM.render(
				<Provider store={store} >
					<App />
				</Provider>, 
				document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
