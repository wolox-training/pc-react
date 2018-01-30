import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import routes from '../../../constants/routes';

import strings from './strings';
import styles from './styles';

class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    return (
      <View style={styles.loginView}>
        <Text>Login Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate(routes.TAB_ROUTER)}
          title={strings.login}
        />
      </View>
    );
  }
}

export default Login;
