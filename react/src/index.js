import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

import books from './redux/books/reducer';
import login from './redux/login/reducer';


let store = createStore(
  combineReducers({
    books,
    login
  }),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
