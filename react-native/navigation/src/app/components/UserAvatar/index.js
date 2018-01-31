import React from 'react';
import { Image } from 'react-native';

import userImage from '../../../assets/user.png';

import styles from './styles';

const UserAvatar = () => <Image
  source={userImage}
  style={styles.userAvatar}
/>;

export default UserAvatar;
