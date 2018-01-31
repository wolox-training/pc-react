import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import actionCreators from '../../redux/todos/actions'

import styles from './styles';
import strings from './strings';

class Footer extends Component {
  toggleClickHandler = () => {
    this.props.dispatch(actionCreators.removeCompleted());
  }

  render() {
    return (
      <TouchableOpacity onPress={this.toggleClickHandler} style={styles.instructions}>
        <Text>
          {strings.removeCompleted}
        </Text>
      </TouchableOpacity>
    );
  }
}



export default connect()(Footer);
