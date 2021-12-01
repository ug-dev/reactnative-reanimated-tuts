//import liraries
import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');
const SIZE = width * 0.7;

// create a component
const SamuraiScreen = ({Title, Desc, Index, ImageUrl, TranslateX}) => {
  const inputRange = [(Index - 1) * width, Index * width, (Index + 1) * width];
  const inset = useSafeAreaInsets();

  const rotateXStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      TranslateX.value,
      inputRange,
      [0, 0, 1],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      TranslateX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [{rotate: `${rotate * Math.PI}rad`}],
    };
  });

  const rCircleStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      TranslateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale}],
    };
  });

  return (
    <View
      style={[
        styles.screenContainer,
        {height: height - inset.top - inset.bottom - 60},
      ]}>
      <View style={styles.topSection}>
        <Animated.View style={[styles.circle, rCircleStyle]} />
        <Animated.Image
          style={[styles.image, rotateXStyle]}
          source={ImageUrl}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.title}>{Title}</Text>
        <Text style={styles.desc}>{Desc}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  screenContainer: {
    width,
    padding: 18,
    backgroundColor: '#E2E4E4',
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    height: SIZE,
    width: SIZE,
    backgroundColor: '#f4f4f4',
    borderRadius: SIZE / 2,
  },
  image: {
    height: width + 12,
    width: width * 0.3,
  },
  topSection: {
    width,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 44,
    color: '#535353',
    fontFamily: 'Lobster-Regular',
  },
  desc: {
    fontSize: 16,
    marginTop: 14,
    color: '#747988',
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
  },
  bottom: {
    alignItems: 'center',
    paddingHorizontal: 12,
    justifyContent: 'center',
    width: '100%',
    flex: 1,
  },
});

//make this component available to the app
export default SamuraiScreen;
