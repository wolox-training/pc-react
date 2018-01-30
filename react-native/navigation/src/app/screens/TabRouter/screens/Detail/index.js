import React, { Component } from 'react';
import {
  Animated,
  Image,
  TouchableOpacity
} from 'react-native';

import UserAvatar from '../../../../components/UserAvatar';

import strings from './strings';
import styles from './styles';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const RandomPosition = () => -100*(Math.random() < 0.5 ? -1 : 1)*Math.random();

const FRICTION = 0.8;

class Detail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${strings.detail} ${navigation.state.params.id}`
  });
  state = {
    top: new Animated.Value(0),
    left: new Animated.Value(0)
  }
  startAnimation = () => {
    this.state.top.setValue(RandomPosition())
    this.state.left.setValue(RandomPosition())
    Animated.parallel([
      Animated.spring(this.state.top, {toValue: 0, friction: FRICTION}),
      Animated.spring(this.state.left, {toValue: 0, friction: FRICTION})
    ]).start()
  }
  render() {
    return (
      <AnimatedTouchableOpacity
        onPress={this.startAnimation}
        style={[styles.animatedTouchable, this.state]}
      >
        <UserAvatar />
      </AnimatedTouchableOpacity>
    );
  }
}

export default Detail;
