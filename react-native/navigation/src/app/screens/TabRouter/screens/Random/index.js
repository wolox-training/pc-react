import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './styles';
import strings from './strings';

class Random extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: strings.random,
    headerLeft: null
  });
  render() {
    return (
      <View style={styles.randomView}>
        <Text>{strings.randomScreen}</Text>
      </View>
    );
  }
}

export default Random;
