import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import color from '../consts/color';
import Statusbar from './Statusbar';
import {WIDTH} from '../consts/config';

export default function Loader() {
  return (
    <>
      <Statusbar backgroundColor={color.white} />
      <View style={styles.container}>
        <FastImage
          style={styles.image}
          source={require('../../assets/img/sadwak.gif')}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: WIDTH / 1,
    height: 200,
  },
});
