import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

const UserAvatar = () => <Image
  source={require('../../../assets/user.png')}
  style={styles.userAvatar}
/>;

export default UserAvatar;
