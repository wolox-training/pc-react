import { compose } from 'redux';
import React, { Component } from 'react';
import Reactotron from 'reactotron-react-native';

import { Provider } from 'react-redux';
import { View } from 'react-native';

import Title from './components/Title';
import Todos from './components/Todos';
import Footer from './components/Footer';
import actionCreators from './redux/todos/reducer';
import styles from './styles';
import strings from './strings';

const store = Reactotron.createStore(actionCreators, compose());

class TodoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Title value={strings.todoList} />
          <Todos />
          <Footer />
        </View>
      </Provider>
    );
  }
}


export default TodoApp;
