import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';

// import {  applyMiddleware, compose } from 'redux';
import {configureStore} from '@reduxjs/toolkit'
// import thunk from 'redux-thunk';
import {reducers} from './reducer/index'
const store = configureStore({reducer:reducers});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

    <App />
    </Provider>
  </React.StrictMode>
);
