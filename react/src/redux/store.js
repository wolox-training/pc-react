import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import books from './books/reducer';
import login from './login/reducer';

const store = createStore(
  combineReducers({
    books,
    login
  }),
  applyMiddleware(thunk)
);

export default store;
