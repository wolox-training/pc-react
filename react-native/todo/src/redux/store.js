import { compose } from 'redux';
import Reactotron from 'reactotron-react-native';

import actionCreators from './todos/reducer';

const store = Reactotron.createStore(actionCreators, compose());

export default store;
