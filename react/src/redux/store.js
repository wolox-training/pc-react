import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import books from './books/reducer';
import login from './login/reducer';
import users from './users/reducer';

const store = createStore(
  combineReducers({
    books,
    login,
    users
  }),
  applyMiddleware(thunk)
);

export default store;
