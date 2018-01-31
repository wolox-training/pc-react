import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight
} from 'react-native';

import actionCreators from '../../../../../../redux/todos/actions';

import styles from './styles';

class DeleteButton extends Component {
  deleteClickHandler = () => {
    this.props.dispatch(actionCreators.removeTodo(this.props.todo));
  }

  render() {
    return (
      <TouchableHighlight onPress={this.deleteClickHandler} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}> x </Text>
      </TouchableHighlight>
    );
  }
}

export default DeleteButton;
