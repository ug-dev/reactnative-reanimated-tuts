//import liraries
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';
const SIZE = 100.0;

// create a component
const Begin = () => {
  const progress = useSharedValue(0.5);
  const scale = useSharedValue(2);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [
        {scale: scale.value},
        {rotate: `${progress.value * 2 * Math.PI}rad`},
      ],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(1), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, [progress, scale]);

  return (
    <View style={styles.sectionContainer}>
      <Animated.View
        style={[
          {height: SIZE, width: SIZE, backgroundColor: 'orange'},
          reanimatedStyle,
        ]}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});

//make this component available to the app
export default Begin;
