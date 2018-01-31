import React, { Component } from 'react';
import {
  View,
  TouchableHighlight
} from 'react-native';

import actionCreators from '../../../../../../redux/todos/actions';

import styles from './styles';

class Checkbox extends Component {
  toggleClickHandler = () => {
    this.props.dispatch(actionCreators.toggleTodo(this.props.todo));
  }

  render() {
    return (
      <TouchableHighlight onPress={this.toggleClickHandler}>
        <View style={styles.box}>
          { this.props.isChecked && <View style={styles.inner}/> }
        </View>
      </TouchableHighlight>
    )
  }

}

export default Checkbox;
