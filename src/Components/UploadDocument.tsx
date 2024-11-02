import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Statusbar from '../common/component/Statusbar';
import Button from '../common/component/Button';
import color from '../common/consts/color';
import { WIDTH } from '../common/consts/config';
import { fontSizes, spacingSizes } from '../common/consts/size';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../common/component/global/Container';
import { AppBar } from '../common/component/global/AppBar';
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsiveSize';
import { Fonts } from '../utils/constant';
import { CameraIcon } from '../common/component/Icons';
import PrimaryButton from '../common/component/global/PrimaryButton';
export default function DocumentUpdate() {
  const Navigation = useNavigation<any>()
  const handleUpload = (type: string) => {
    console.log(`Upload ${type}`);
  };
  return (
    <Container statusBarBackgroundColor='#ffffff' statusBarStyle='dark-content' >
      <AppBar back/>
      {/* <TouchableOpacity
        onPress={() => {
          Navigation.goBack();
        }}>
        <AntDesign name="left" size={spacingSizes.medium} color={color.black} />
      </TouchableOpacity> */}
      <View style={{ marginHorizontal: moderateScale(15) }} >


        <Text style={styles.headerText}>Aadhar card details</Text>
        <Text style={styles.subText}>
          Upload focused photo of your Aadhar Card for faster verification
        </Text>
        <View></View>
        <View style={styles.mainBorder}>
          <Text style={styles.label}>
            Front side photo of your Aadhar card with your clear name and photo
          </Text>
          <View style={styles.border}>
            <TouchableOpacity
              style={styles.uploadContainer}
              onPress={() => handleUpload('photo')}>
           <CameraIcon/>
              <Text style={styles.uploadText}>Upload Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainBorder}>
          <Text style={styles.label}>
            Front side photo of your Aadhar card with your clear name and photo
          </Text>
          <View style={styles.border}>
            <TouchableOpacity
              style={styles.uploadContainer}
              onPress={() => handleUpload('pdf')}>
           <CameraIcon/>
              <Text style={styles.uploadText}>Upload PDF</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      {/* <Button onPress={() => { Navigation.navigate("ViewDocument") }} title="Submit" containerStyles={styles.submitButton} /> */}
      <PrimaryButton onPress={() => { Navigation.navigate("ViewDocument") }} buttonText='Submit' borderRadius={moderateScale(30)} marginVertical={moderateScaleVertical(15)} marginHorizontal={moderateScale(15)} />

    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,

    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: textScale(20),
    fontFamily: Fonts.Bold,
    color: '#000',
    marginBottom: 8,
    marginTop: spacingSizes.mediumLarge
  },
  subText: {
    fontSize: textScale(12),
    fontFamily: Fonts.Regular,
    color: '#888',
    marginBottom: 20,
  },
  mainBorder: {
    width: WIDTH / 1.1,
    borderColor: color.black,
    borderRadius: 8,
    marginBottom: 15,
    justifyContent: 'center',
    borderStyle: 'dashed',
    height: 200,
    borderWidth: 1,
    marginTop: spacingSizes.medium,
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: textScale(12),
    fontFamily: Fonts.Regular,
    marginBottom: spacingSizes.medium,
  },
  border: {
    borderWidth: 1,
    borderColor: color.red,
    width: WIDTH / 3,
    padding: spacingSizes.smallMedium,
    borderRadius: spacingSizes.mediumLarge,
    alignSelf: "center"
  }
});
