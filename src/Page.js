//import liraries
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');
const SIZE = width * 0.7;

// create a component
const Page = ({Title, Index, TranslateX}) => {
  const inputRange = [(Index - 1) * width, Index * width, (Index + 1) * width];

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      TranslateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(
      TranslateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP,
    );

    return {
      borderRadius: borderRadius,
      transform: [{scale}],
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      TranslateX.value,
      inputRange,
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      TranslateX.value,
      inputRange,
      [-2, 1, -2],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [{translateY}],
    };
  });

  return (
    <View
      style={[
        styles.screenContainer,
        {backgroundColor: `rgba(0, 0, 256, 0.${Index + 2})`},
      ]}>
      <Animated.View style={[styles.square, rStyle]} />
      <Animated.View style={[{position: 'absolute'}, rTextStyle]}>
        <Text style={styles.text}>{Title}</Text>
      </Animated.View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  screenContainer: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    height: SIZE,
    width: SIZE,
    backgroundColor: 'rgba(0,0,256, 0.4)',
  },
  text: {
    fontSize: SIZE / 4,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default Page;
