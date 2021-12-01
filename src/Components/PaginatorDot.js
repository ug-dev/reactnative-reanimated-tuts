//import liraries
import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

// create a component
const PaginatorDot = ({activeDotIndex, index}) => {
  //   const rDotStyle = useAnimatedStyle(() => {
  //     const isActive = (activeDotIndex.value = index);

  //     return {backgroundColor: isActive ? '#535353' : '#fff'};
  //   });

  return <Animated.View style={[styles.dot]} />;
};

// define your styles
const styles = StyleSheet.create({
  dot: {
    height: 14,
    width: 14,
    backgroundColor: 'white',
    borderColor: '#535353',
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 4,
  },
});
//make this component available to the app
export default PaginatorDot;
