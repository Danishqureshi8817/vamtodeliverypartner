import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Statusbar from '../common/component/Statusbar';
import Button from '../common/component/Button';
import color from '../common/consts/color';
import { WIDTH } from '../common/consts/config';
import { fontSizes, spacingSizes } from '../common/consts/size';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { AppBar } from '../common/component/global/AppBar';
import { BackIcon, ClosePrimaryIcon } from '../common/component/Icons';
import { Container } from '../common/component/global/Container';
import Body from '../common/component/global/Body';
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsiveSize';
import { Fonts } from '../utils/constant';
export default function ViewDocument() {
  const Navigation = useNavigation<any>();
  const handleUpload = (type: string) => {
    console.log(`Upload ${type}`);
  };
  return (
    <Container statusBarBackgroundColor='#fff' statusBarStyle='dark-content' >
      {/* <Statusbar backgroundColor={color.white} /> */}
      <AppBar back />
      {/* <BackIcon/> */}
      <Text style={styles.headerText}>Aadhar card details</Text>
        <Text style={styles.subText}>
          Upload focused photo of your Aadhar Card for faster verification
        </Text>
      <Body contentContainerStyle={{alignItems:'center',marginHorizontal:moderateScale(10)}}>


        {/* <TouchableOpacity
        onPress={() => {
          Navigation.goBack();
        }}>
        <AntDesign name="left" size={spacingSizes.medium} color={color.black} />
      </TouchableOpacity> */}

        <View style={{marginTop:moderateScaleVertical(15),gap:moderateScale(15)}}>
        <View style={styles.mainBorder}>
          <Text style={styles.label}>
            Front side photo of your Aadhar card with your clear name and photo
          </Text>
          <View style={styles.adhar}>
            <Image
              style={styles.adharSize}
              resizeMode="contain"
              source={require('../assets/img/adhar.png')}
            />
          </View>
          <View style={styles.border}>
            <TouchableOpacity
              style={styles.uploadContainer}
              onPress={() => handleUpload('photo')}>
              <Text style={styles.uploadText}>Uploaded</Text>
            <ClosePrimaryIcon/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainBorder}>
          <Text style={styles.label}>
            Front side photo of your Aadhar card with your clear name and photo
          </Text>
          <View style={styles.adhar}>
            <Image
              style={styles.adharSize}
              resizeMode="contain"
              source={require('../assets/img/adhar.png')}
            />
          </View>
          <View style={styles.border}>
            <TouchableOpacity
              style={styles.uploadContainer}
              onPress={() => handleUpload('pdf')}>
              <Text style={styles.uploadText}>Uploaded</Text>
            <ClosePrimaryIcon/>
            </TouchableOpacity>
          </View>
        </View>
        </View>
        <Button onPress={() => { Navigation.navigate("RegisterComplete") }} title="Submit" containerStyles={styles.submitButton} />
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,

    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: textScale(20),
    fontFamily: Fonts.Medium,
    color: '#000',
    marginBottom: moderateScaleVertical(8),
    // marginTop: spacingSizes.mediumLarge,
    marginHorizontal:moderateScale(15)
  },
  subText: {
    fontSize: textScale(14),
    fontFamily: Fonts.Regular,
    color: '#888',
    // marginBottom: 20,
    marginHorizontal:moderateScale(15)
  },
  mainBorder: {
    width: WIDTH / 1.1,
    borderColor: color.black,
    borderRadius: 8,
    // marginBottom: 15,
    justifyContent: 'center',
    borderStyle: 'dashed',
    height: moderateScale(270),
    borderWidth: 1,
    paddingVertical:moderateScale(20)
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacingSizes.medium,
    alignSelf: "center",
    marginHorizontal: spacingSizes.medium,
    width: 200

  },
  icon: {
    marginRight: 10,
  },
  uploadText: {
    fontSize: 16,
    color: color.red,
    fontWeight: '500',
  },
  submitButton: {
    marginTop: 30,
    borderRadius: 8,
    paddingVertical: 15,
    alignSelf: 'center',
  },
  label: {
    width: WIDTH / 1.7,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: textScale(14),
    fontFamily: Fonts.Regular,
    marginBottom: spacingSizes.medium,
  },
  border: {
    borderWidth: 1,
    borderColor: color.red,
    width: WIDTH / 3,
    padding: spacingSizes.smallMedium,
    borderRadius: spacingSizes.mediumLarge,
    alignSelf: 'center',
    gap: spacingSizes.medium,
    marginBottom: spacingSizes.medium
  },
  adharSize: {
    width: 148,
    height: 96,
    alignSelf: 'center',
    borderWidth: 1,
  },
  adhar: {
    borderWidth: 1,
    borderColor: color.grey,
    borderStyle: 'dashed',
    width: 150,
    alignSelf: 'center',
    marginBottom: spacingSizes.medium,
    padding: spacingSizes.small,
  },
});
