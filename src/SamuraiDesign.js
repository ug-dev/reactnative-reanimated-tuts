//import liraries
import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import SamuraiScreen from './Components/SamuraiScreen';
import Arrow from '../src/Components/arrow.svg';
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
  return (
    <>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        overScrollMode={'never'}
        style={styles.screenContainer}>
        {WORDS.map((v, i) => {
          return (
            <SamuraiScreen
              key={i}
              Title={v.title}
              Desc={v.desc}
              Index={i + 2}
              ImageUrl={v.image}
            />
          );
        })}
      </ScrollView>
      <View style={{height: 80, backgroundColor: 'red'}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 14,
              width: 14,
              backgroundColor: '#535353',
              borderRadius: 12,
              marginHorizontal: 4,
            }}
          />
          <View
            style={{
              height: 14,
              width: 14,
              backgroundColor: '#535353',
              borderRadius: 12,
              marginHorizontal: 4,
            }}
          />
          <View
            style={{
              height: 14,
              width: 14,
              backgroundColor: '#535353',
              borderRadius: 12,
              marginHorizontal: 4,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 14,
            textTransform: 'uppercase',
            color: '#535353',
            fontFamily: 'Lato-Regular',
            textAlign: 'center',
          }}>
          View Board
        </Text>
        {/* <Arrow /> */}
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default SamuraiDesign;
