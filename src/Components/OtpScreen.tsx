import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import color from '../common/consts/color';
import Statusbar from '../common/component/Statusbar';
import Button from '../common/component/Button';
import {fontSizes, spacingSizes} from '../common/consts/size';
import {WIDTH, HEIGHT} from '../common/consts/config';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import { Container } from '../common/component/global/Container';
import { AppBar } from '../common/component/global/AppBar';
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsiveSize';
import { Fonts } from '../utils/constant';
import PrimaryButton from '../common/component/global/PrimaryButton';
export default function OtpScreen() {
  const Navigation = useNavigation<any>();
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChangeText = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to the next input box when a number is entered
    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (
      event.nativeEvent.key === 'Backspace' &&
      otp[index] === '' &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
    }
  };
  const handleVerifyOtp = () => {
    const enteredOtp = otp.join('');
    console.log('Entered OTP:', enteredOtp);
    Navigation.navigate("PersonalInformation")
  };
  return (
    <Container statusBarBackgroundColor='#ffffff' statusBarStyle='dark-content' >
     <AppBar back />
     <View style={styles.container} >
     
      <Text style={styles.title}>Enter OTP to verify</Text>
      <Text style={styles.subtitle}>
        A 6 digit OTP has been sent to your phone number +91 9999988888
        <Text style={styles.changeText}>  Change</Text>
      </Text>
      <Text style={styles.otpText}>Enter OTP Text</Text>
      {/* OTP input fields */}
      <View style={styles.otpContainer}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            value={otp[index]}
            onChangeText={text => handleChangeText(text, index)}
            onKeyPress={event => handleKeyPress(event, index)}
            ref={ref => (inputs.current[index] = ref)}
          />
        ))}
      </View>

      {/* Verify OTP Button */}
   <PrimaryButton onPress={handleVerifyOtp} buttonText='Verify OTP' borderRadius={moderateScale(30)} />
           </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: WIDTH * 0.05,
  },
  title: {
    fontSize: textScale(24),
    fontFamily:Fonts.SemiBold,
    color: color.black,
    marginBottom: spacingSizes.small,
  },
  subtitle: {
    fontSize: fontSizes.small,
    color: color.slateBlack,
    marginBottom: spacingSizes.large,
    marginTop: spacingSizes.medium,
  },
  changeText: {
    color: color.primary,
    fontFamily:Fonts.Regular,
    fontSize:textScale(12)

    
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacingSizes.large,
    marginTop: spacingSizes.medium,
  },
  otpBox: {
    width: WIDTH * 0.12,
    height: WIDTH * 0.12,
    borderWidth: 1,
    borderColor: color.green,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    color: color.black,
  },
  buttonBox: {
    alignSelf: 'center',
    marginTop: spacingSizes.mediumLarge,
    width: WIDTH / 1.2,
  },
  otpText: {
    color: color.slateBlack,
   fontSize:textScale(16),
   fontFamily:Fonts.Regular,
    marginTop: spacingSizes.mediumLarge,
  },
});
