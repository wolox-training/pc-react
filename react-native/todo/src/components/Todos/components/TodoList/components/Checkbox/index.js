import React from 'react';
import {
  View,
  TouchableHighlight
} from 'react-native';

import styles from './styles';

const Checkbox = ({todo, isChecked, toggleClickHandler}) => (
  <TouchableHighlight onPress={() => toggleClickHandler(todo)}>
    <View style={styles.box}>
      { isChecked && <View style={styles.inner}/> }
    </View>
  </TouchableHighlight>
);

export default Checkbox;
