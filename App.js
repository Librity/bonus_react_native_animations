import React, {Component} from 'react';
import {StyleSheet, View, Animated, PanResponder} from 'react-native';

// https://facebook.github.io/react-native/docs/animated

// Animated.View
// Animated.Text
// Animated.Image
// Animated.ScrollView

// const ballY = new Animated.Value(0);
// const ballX = new Animated.Value(0);
// const ballX = Animated.divide(ballY, 2);
const ball = new Animated.ValueXY({x: 0, y: 0});

export default class App extends Component {
  state = {
    // ballY, ballX,
    ball,
  };

  UNSAFE_componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.ball.setOffset({
          x: this.state.ball.x._value,
          y: this.state.ball.y._value,
        });

        this.state.ball.setValue({x: 0, y: 0});
      },

      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: this.state.ball.x,
            dy: this.state.ball.y,
          },
        ],
        {
          listener: (e, gestureState) => {
            console.log(gestureState);
          },
        },
      ),

      onPanResponderRelease: () => {
        this.state.ball.flattenOffset();
      },
    });
  }

  // componentDidMount() {
  //   Animated.sequence([
  //     Animated.timing(this.state.ballY, {
  //       toValue: 200,
  //       duration: 500,
  //     }),

  //     Animated.delay(100),

  //     Animated.timing(this.state.ballX, {
  //       toValue: 200,
  //       duration: 500,
  //     }),

  //     Animated.parallel([
  //       Animated.timing(this.state.ballY, {
  //         toValue: 0,
  //         duration: 500,
  //       }),

  //       Animated.timing(this.state.ballX, {
  //         toValue: 0,
  //         duration: 500,
  //       }),
  //     ]),

  //     Animated.stagger(100, [
  //       Animated.timing(this.state.ballY, {
  //         toValue: 200,
  //         duration: 500,
  //       }),

  //       Animated.timing(this.state.ballX, {
  //         toValue: 200,
  //         duration: 500,
  //       }),
  //     ]),

  //     Animated.parallel([
  //       Animated.timing(this.state.ballY, {
  //         toValue: 0,
  //         duration: 500,
  //       }),

  //       Animated.timing(this.state.ballX, {
  //         toValue: 0,
  //         duration: 500,
  //       }),
  //     ]),

  //     Animated.loop(
  //       Animated.sequence([
  //         Animated.timing(this.state.ballY, {
  //           toValue: 200,
  //           duration: 200,
  //         }),

  //         Animated.timing(this.state.ballX, {
  //           toValue: 200,
  //           duration: 200,
  //         }),

  //         Animated.timing(this.state.ballY, {
  //           toValue: 0,
  //           duration: 200,
  //         }),

  //         Animated.timing(this.state.ballX, {
  //           toValue: 0,
  //           duration: 200,
  //         }),
  //       ]),
  //       {
  //         iterations: 3,
  //       },
  //     ),

  //     Animated.timing(this.state.ballY, {
  //       toValue: 500,
  //       duration: 500,
  //     }),

  //     Animated.spring(this.state.ballX, {
  //       toValue: 300,
  //       bounciness: 50,
  //     }),

  //     Animated.decay(this.state.ballY, {
  //       velocity: 0.5,
  //     }),
  //   ]).start();
  // }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          {...this._panResponder.panHandlers}
          style={[
            styles.ball,
            {
              transform: [
                {translateX: this.state.ball.x},
                {translateY: this.state.ball.y},
              ],
              // top: this.state.ballY,
              // left: this.state.ballX,
              // opacity: this.state.ballY.interpolate({
              //   inputRange: [0, 150, 200],
              //   outputRange: [1, 1, 0.2],
              //   extrapolate: 'clamp',
              // }),
            },
          ]}
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
