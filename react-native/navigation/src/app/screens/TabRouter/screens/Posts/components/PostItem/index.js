import React from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import UserAvatar from '../../../../../../components/UserAvatar';

import styles from './styles.js';

const PostItem = props => (
  <TouchableHighlight
    onPress={() => props.goToDetail(props.item.id)}
  >
    <View style={styles.postsView}>
      <UserAvatar />
      <Text>{props.item.title}</Text>
    </View>
  </TouchableHighlight>
);

export default PostItem;
