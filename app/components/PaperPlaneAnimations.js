import React, { useRef, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';

const PaperPlaneAnimation = () => {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const opacityValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    animateButton();
  }, []);

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 0.2,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        delay: 2000,
      }),
      Animated.timing(rotateValue, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start(() => animateButton());
  };

  const rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '40deg'],
  });

  const scale = scaleValue.interpolate({
    inputRange: [0, 0.2, 1],
    outputRange: [0, 1.5, 1],
  });

  const opacity = opacityValue;

  return (
    <Animated.View
      style={{
        transform: [{ rotate: rotation }, { scale }],
        opacity,
        borderRadius: 7,
        backgroundColor: '#275EFE',
        padding: 8,
        minWidth: 100,
      }}
    >
      <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>Send</Text>
    </Animated.View>
  );
};

export default PaperPlaneAnimation;