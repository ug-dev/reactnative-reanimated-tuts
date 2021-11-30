//import liraries
import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

const {width, height} = Dimensions.get('window');
const SIZE = width * 0.7;

// create a component
const SamuraiScreen = ({Title, Desc, Index, ImageUrl}) => {
  return (
    <View style={[styles.screenContainer]}>
      <View style={styles.topSection}>
        <View style={styles.circle} />
        <Image style={styles.image} source={ImageUrl} />
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
    height: height - 80,
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
  image: {height: height * 0.52, width: width * 0.3},
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
