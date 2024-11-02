import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { WIDTH } from '../consts/config';
import color from '../consts/color';
import { spacingSizes } from '../consts/size';


interface LoaderProps {
  visible: boolean;
}
const LogoLoader: React.FC<LoaderProps> = ({visible}) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [fadeAnim, visible]);
  return (
    <Spinner
      visible={visible}
      customIndicator={
        <Animated.View style={[styles.spinnerContainer, {opacity: fadeAnim}]}>
          <Image
            source={require('../assets/img/logo.png')}
            style={styles.spinnerImage}
            resizeMode="contain"
          />
        </Animated.View>
      }
    />
  );
};
const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: WIDTH / 1,
  },
  spinnerImage: {
    width: 80,
    height: 80,
    backgroundColor: color.lightGrey,
    padding: spacingSizes.large,
    borderRadius: spacingSizes.mediumLarge,
  },
});

export default LogoLoader;