//import liraries
import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Page from './Page';

const WORDS = ['hey', 'there', 'thisis', 'ug'];

// create a component
const InterpolateAnim = () => {
  const translateX = useSharedValue(0);

  const scrollHander = useAnimatedScrollHandler(e => {
    translateX.value = e.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      padingEnabled
      onScroll={scrollHander}
      scrollEventThrottle={16}
      horizontal
      style={styles.screenContainer}>
      {WORDS.map((v, i) => {
        return <Page Title={v} Index={i} key={i} TranslateX={translateX} />;
      })}
    </Animated.ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  screenContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default InterpolateAnim;
