import React from 'react';
import {
  Text,
  TouchableHighlight
} from 'react-native';

import styles from './styles';

const DeleteButton = ({todo, deleteClickHandler}) => (
  <TouchableHighlight onPress={() => deleteClickHandler(todo)} style={styles.deleteButton}>
    <Text style={styles.deleteButtonText}> x </Text>
  </TouchableHighlight>
);

export default DeleteButton;
