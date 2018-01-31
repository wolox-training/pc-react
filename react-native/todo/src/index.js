import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { View } from 'react-native';

import Title from './components/Title';
import Todos from './components/Todos';
import Footer from './components/Footer';
import store from './redux/store';
import styles from './styles';
import strings from './strings';

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
