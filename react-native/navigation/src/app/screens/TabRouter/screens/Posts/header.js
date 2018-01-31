import React from 'react';
import {
  View,
  Text
} from 'react-native';

import UserAvatar from '../../../../components/UserAvatar';

import styles from './styles';
import strings from './strings';

const Header = () => (
  <View
    style={styles.headerView}
  >
    <UserAvatar />
    <Text>{strings.customHeader}</Text>
  </View>
);

export default Header;
