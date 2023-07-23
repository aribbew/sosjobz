import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const LoadingDots = () => {
  const dotAnimation = useRef(new Animated.Value(0)).current;

  const animateDots = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(dotAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(dotAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    animateDots();
  }, []);

  const dotStyle = {
    opacity: dotAnimation,
    transform: [
      {
        scale: dotAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.dot, dotStyle]} />
      <Animated.View style={[styles.dot, dotStyle]} />
      <Animated.View style={[styles.dot, dotStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'blue', // You can change the color here
    marginHorizontal: 5,
  },
});

export default LoadingDots;