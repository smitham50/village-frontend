import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import userReducer from './reducers/userreducer'
import eventReducer from './reducers/eventreducer'

const rootReducer = combineReducers({ user: userReducer, event: eventReducer })

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><Router><Route path="/" component={App} /></Router></Provider>, document.getElementById('root'));

serviceWorker.unregister();
