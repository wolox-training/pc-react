import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight
} from 'react-native';

import data from '../../../../../mock';
import routes from '../../../../../constants/routes';
import UserAvatar from '../../../../components/UserAvatar';

import Header from './header';
import styles from './styles'

class Posts extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Posts',
    tabBarLabel: 'Posts',
    headerLeft: null,
    header: <Header />
  });
  render() {
    return (
      <FlatList
        data={data}
        renderItem={({item, separators}) => (
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate(routes.DETAIL, { id: item.id })}
          >
            <View style={styles.postsView}>
              <UserAvatar />
              <Text>{item.title}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    );
  }
}

export default Posts;
