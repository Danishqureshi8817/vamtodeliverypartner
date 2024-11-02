import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Ensure React Navigation is installed
import color from '../common/consts/color';
import { fontSizes } from '../common/consts/size';
import { Container } from '../common/component/global/Container';
import { imagePath } from '../assets/img';
import { height, moderateScale, textScale, width } from '../utils/responsiveSize';
import { Fonts } from '../utils/constant';

export default function Splash() {
  const navigation = useNavigation<any>();
  const imageAnim = useRef(new Animated.Value(0)).current; // Start from below the screen
  const textAnim = useRef(new Animated.Value(0)).current; // Start with opacity 0

  useEffect(() => {
    // Image animation: move from below to the center
    Animated.timing(imageAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Text animation: fade in from the left
    Animated.timing(textAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    // Navigate to onboarding screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding'); // Replace with your onboarding screen name
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [imageAnim, textAnim, navigation]);

  return (
    <Container statusBarBackgroundColor='#ffffff' statusBarStyle='dark-content'>
    <View style={styles.container}>

      <ImageBackground
        source={imagePath.splash2} // Replace with your logo path
        style={{ width: '100%', height: height * 0.83 }}
        resizeMode="cover"
      >
        <Image source={imagePath.splash1} // Replace with your logo path
          style={{ width: '90%', height: height * 0.85 }}
          resizeMode="cover"
        />

        <View style={{position:'absolute',top:0 ,marginTop:height*0.39,alignSelf:'center',}} >
        <Animated.Image source={imagePath.nameLogo} // Replace with your logo path
          style={{ width: moderateScale(280), height:moderateScale(50),
            
                      transform: [
                        {
                          translateY: imageAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [150, 0], // Move from below (150) to center (0)
                          }),
                        },
                      ],
                      opacity: imageAnim, // Fade in effect
                    
          }}
          resizeMode="contain"
        />
        <Animated.Text style={{fontSize:textScale(14),color:'#FF5963',textAlign:'center',fontFamily:Fonts.Medium,
          
                    opacity: textAnim,
                    transform: [
                      {
                        translateX: textAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-100, 0], // Move from -100 to 0
                        }),
                      },
                    ],
                  
        }} numberOfLines={1}>Delivery Partner</Animated.Text>
        </View>

      </ImageBackground>

    </View>
  </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: width * 0.35,
    height: height * 0.15,
    marginBottom: 40,
  },
});
