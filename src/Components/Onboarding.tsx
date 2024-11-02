import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Statusbar from '../common/component/Statusbar';
import color from '../common/consts/color';
import { fontSizes, spacingSizes } from '../common/consts/size';
import Button from '../common/component/Button';
import { HEIGHT, WIDTH } from '../common/consts/config';
import Input from '../common/component/TextInput';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../common/component/global/Container';
import Body from '../common/component/global/Body';
import { imagePath } from '../assets/img';
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsiveSize';
import { Fonts } from '../utils/constant';
import PrimaryButton from '../common/component/global/PrimaryButton';
import Orders from './Orders';

export default function Onboarding() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const Navigation = useNavigation<any>();

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container fullScreen={true} statusBarStyle='light-content' statusBarBackgroundColor={'transparent'}>
      <Body>

        <ImageBackground
          source={imagePath.loginBg} // Replace with your logo path
          style={{ width: '100%', height: height * 0.7, justifyContent: 'center', gap: moderateScale(35) }}
          resizeMode='cover'
        >
          <Image alt='icon'
            source={imagePath.deliverBoy} // Replace with your logo path
            style={{ width: moderateScale(320), height: moderateScale(280), alignSelf: 'center', marginTop: moderateScaleVertical(60) }}
            resizeMode="contain"
          />

          <View style={{ gap: moderateScale(10), marginHorizontal: moderateScale(15) }}>
            <Text style={{ fontFamily: Fonts.Bold, fontSize: textScale(18), color: color.black, lineHeight: textScale(20) }} >Be a Adiya Food Partner</Text>
            <Text style={{ fontFamily: Fonts.Bold, fontSize: textScale(28), color: color.black, lineHeight: textScale(30) }} >Get a stable monthly income</Text>
          </View>

        </ImageBackground>


        <View style={styles.mainBox}>
          <Input
            containerStyles={styles.inputBox}
            // label="Enter Email"
            inputProps={{ placeholder: 'Enter your email' }}
          />

          <Input
            containerStyles={styles.inputBox}
            // label="Enter Password"
            inputProps={{ placeholder: 'Enter your password' }}
          />

        </View>

        <PrimaryButton buttonText='Login' onPress={() => { Navigation.navigate('OtpScreen'); }} marginHorizontal={moderateScale(15)} borderRadius={moderateScale(30)} />

        <View style={styles.termsContainer}>
          {/* <CheckBox
              value={isChecked}
              onValueChange={handleCheckboxToggle}
              tintColors={{ true: '#1e90ff', false: '#A3A3A3' }}
            /> */}
            <View style={{flexDirection:'row',alignItems:'center',gap:moderateScale(8)}}>
            <Text style={styles.termsText}>
            Don't have an account?  
          </Text>
          <Pressable onPress={()=> Navigation.navigate('PersonalInformation')}>

          <Text style={styles.linkText}>Sign Up</Text>
          </Pressable>
            </View>

        </View>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  main: {
    height: HEIGHT / 1.5,
    borderBottomRightRadius: spacingSizes.xxxxxlarge,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacingSizes.mediumLarge,
  },
  imageBox: {
    height: 220,
    width: 220,
    marginBottom: spacingSizes.large,
  },
  titleText: {
    fontSize: fontSizes.medium,
    fontWeight: '600',
    color: color.slateBlack,
    marginTop: spacingSizes.medium,
  },
  subtitleText: {
    fontSize: fontSizes.larger,
    fontWeight: '700',
    color: color.black,
    marginVertical: spacingSizes.small,
    width: WIDTH / 1.3,
  },
  mainBox: {
    // marginTop: spacingSizes.medium,
    paddingHorizontal: moderateScale(15),
    gap:moderateScaleVertical(15),
    marginVertical:moderateScaleVertical(10)
    // marginTop: moderateScaleVertical(-5)
  },
  inputBox: {
    width: '100%',
    // marginBottom: spacingSizes.small,
  },
  termsText: {
    fontSize: textScale(12),
    color: color.grey,
    // width: WIDTH * 0.9,
    fontFamily: Fonts.Medium,
    textAlign: 'center'
  },
  linkText: {
    color: color.red,
    textDecorationLine: 'underline',
  },
  buttonBox: {
    alignSelf: 'center',
    marginTop: moderateScaleVertical(4),
    width: WIDTH / 1.2,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScaleVertical(5),
    alignSelf: 'center',
  },
});
