import React from 'react';
import  ReactDOM from 'react-dom';
import App from "./app";
import { Provider } from "react-redux"  //it is going to keep track of the store 
//which is that global state and that allows us to access the store from anywhere
//inside of the app we don't have to be exactly in a parent comp or in a child comp
//we can access this state from anywhere
import {createStore,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./index.css"

const store = createStore(reducers,compose(applyMiddleware(thunk)));  // to set redux
ReactDOM.render(
    <Provider store = {store}>
    <App />

    </Provider>
    ,document.getElementById('root'))