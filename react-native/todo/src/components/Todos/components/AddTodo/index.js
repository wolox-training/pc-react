import React, { Component } from 'react';
import { TextInput } from 'react-native';

import actionCreators from '../../../../redux/todos/actions';

import strings from './strings';
import styles from './styles';

class AddTodo extends Component {
  state = { text: '' };

  submitEditingHandler = e => {
    this.props.dispatch(actionCreators.addTodo(this.state.text));
    this.setState({text: ''});
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        onSubmitEditing={this.submitEditingHandler}
        placeholder={strings.enterItem}
      />
    );
  }
}

export default AddTodo;
