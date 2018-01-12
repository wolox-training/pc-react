import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

import books from './redux/books/reducer';
import login from './redux/login/reducer';
import users from './redux/users/reducer';


let store = createStore(
  combineReducers({
    books,
    login,
    users,
    form: formReducer
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
