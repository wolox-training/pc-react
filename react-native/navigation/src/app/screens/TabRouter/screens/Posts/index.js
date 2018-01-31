import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight
} from 'react-native';

import data from '../../../../../mock';
import routes from '../../../../../constants/routes';

import Header from './header';
import styles from './styles';
import PostItem from './components/PostItem';

class Posts extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Posts',
    tabBarLabel: 'Posts',
    header: <Header />
  });

  goToDetail = itemId => this.props.navigation.navigate(routes.DETAIL, { id: itemId });

  render() {
    return (
      <FlatList
        data={data}
        renderItem={({item, separators}) => (
          <PostItem item={item} goToDetail={this.goToDetail} />
        )}
        keyExtractor={(item, index) => item.id}
      />
    );
  }
}

export default Posts;
