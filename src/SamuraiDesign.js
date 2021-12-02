//import liraries
import React, {useCallback} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import SamuraiScreen, {width} from './Components/SamuraiScreen';
import Arrow from '../src/Components/arrow.svg';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import PaginatorDot from './Components/PaginatorDot';
const image1 = require('../src/Components/frame-1.png');
const image2 = require('../src/Components/frame-2.png');
const image3 = require('../src/Components/frame-3.png');

const WORDS = [
  {
    title: 'Samurai',
    desc: "Here's a concept to view and purchase skateboards from a mobile device. Enjoy! device. Enjoy!",
    image: image1,
  },
  {
    title: 'Reject',
    desc: "Here's a concept to view and purchase skateboards from a mobile device. Enjoy! device. Enjoy!",
    image: image2,
  },
  {
    title: 'Great Wave',
    desc: "Here's a concept to view and purchase skateboards from a mobile device. Enjoy! device. Enjoy!",
    image: image3,
  },
];

// create a component
const SamuraiDesign = () => {
  const translateX = useSharedValue(0);

  const scrollHander = useAnimatedScrollHandler({
    onScroll: e => {
      translateX.value = e.contentOffset.x;
    },
  });

  const activeDotIndex = useDerivedValue(() => {
    return Math.round(translateX.value / width);
  });

  const scrollRef = useAnimatedRef();

  const onIconPress = useCallback(() => {
    if (activeDotIndex.value === WORDS.length - 1) {
      return;
    }
    scrollRef.current?.scrollTo({x: width * (activeDotIndex.value + 1)});
  }, [activeDotIndex.value, scrollRef]);

  return (
    <View style={styles.main}>
      <Animated.ScrollView
        ref={scrollRef}
        onScroll={scrollHander}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        overScrollMode={'never'}
        style={styles.screenContainer}>
        {WORDS.map((v, i) => {
          return (
            <SamuraiScreen
              TranslateX={translateX}
              key={i}
              Title={v.title}
              Desc={v.desc}
              Index={i}
              ImageUrl={v.image}
            />
          );
        })}
      </Animated.ScrollView>
      <View style={styles.bottom}>
        <Animated.View style={styles.dotContainer}>
          {WORDS.map((_, i) => {
            return (
              <PaginatorDot activeDotIndex={activeDotIndex} index={i} key={i} />
            );
          })}
        </Animated.View>
        <Text style={styles.text}>View Board</Text>
        <Pressable style={styles.arrowContainer} onPress={onIconPress}>
          <Arrow />
        </Pressable>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#fff',
  },
  main: {position: 'relative', height: '100%'},
  dotContainer: {flexDirection: 'row'},

  bottom: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 14,
    justifyContent: 'space-between',
    backgroundColor: '#E2E4E4',
  },
  text: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#4C4D53',
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
  },
  arrowContainer: {
    height: '100%',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default SamuraiDesign;
