import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import books from './books/reducer';
import login from './login/reducer';
import users from './users/reducer';

const store = createStore(
  combineReducers({
    books,
    login,
    users,
    form: formReducer
  }),
  applyMiddleware(thunk)
);

export default store;
