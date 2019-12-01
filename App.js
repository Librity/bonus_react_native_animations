import React, {Component} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

// https://facebook.github.io/react-native/docs/animated

// Animated.View
// Animated.Text
// Animated.Image
// Animated.ScrollView

const ballY = new Animated.Value(0);
const ballX = Animated.divide(ballY, 2);

export default class App extends Component {
  state = {
    ballY: ballY,
    ballX: ballX,
  };

  componentDidMount() {
    // const timing1 = Animated.timing(this.state.ballY, {
    //   toValue: 500,
    //   duration: 1000,
    // }).start();

    // const spring1 = Animated.spring(this.state.ballX, {
    //   toValue: 300,
    //   bounciness: 50,
    // }).start();

    const decay1 = Animated.decay(this.state.ballY, {
      velocity: 0.5,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.ball, {top: this.state.ballY, left: this.state.ballX}]}
        />
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
