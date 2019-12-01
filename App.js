import React, {Component} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

// Animated.View
// Animated.Text
// Animated.Image
// Animated.ScrollView

export default class App extends Component {
  state = {
    ballX: new Animated.Value(0),
    ballY: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.ballY, {
      toValue: 500,
      duration: 1000,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.ball, {top: this.state.ballY}]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F00',
  },
});
