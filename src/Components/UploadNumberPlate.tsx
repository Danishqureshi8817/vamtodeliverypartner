import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
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
import { CameraIcon, CloseCrossIcon } from '../common/component/Icons';
import PrimaryButton from '../common/component/global/PrimaryButton';
import CenterModalLoader from '../common/component/global/CenterModalLoader';
import { launchImageLibrary } from 'react-native-image-picker';
import { useRegistration } from '../context/registration';
import useUserRegister from '../hooks/auth/registration';

export default function UploadNumberPlate() {
  const Navigation = useNavigation<any>()
  const { registrationData, addImage,updateField, removeImage } = useRegistration();

  // state
  const [selectedFrontImage, setSelectedFrontImage] = useState('')
  const [selectedBackImage, setSelectedBackImage] = useState('')

  // api
  const useUserRegisterMutation = useUserRegister()

  // console.log(registrationData?.pencard,'kklklk');
  

  const handleUserRegistration = () => {

    const payload = {
      name: registrationData?.name ?? 'N/A', // String
      mobile: Number(registrationData?.mobile), // Number
      paymentType: registrationData?.paymentType ?? 'N/A', // Example array of strings
      bankName: registrationData?.bankName ?? 'N/A', // String
      ifscCode: registrationData?.ifscCode ?? 'N/A', // String
      accountNumber: registrationData?.accountNumber ?? 'N/A', // String
      upiId: registrationData?.upiId ?? 'N/A', // String
      drivingLIcence: registrationData?.drivingLicence ?? 'N/A', // Array of strings (images)
      diverRc: registrationData?.diverRc ?? 'N/A', // String (image)
      vehiclePlate: registrationData?.vehiclePlate ?? 'N/A', // String (image)
      adharCardNumber: registrationData?.adharCardNumber ?? 'N/A', // Array of strings (images)
      vehicleDetails: registrationData?.vehicleDetails ?? 'N/A', // String (details about the vehicle)
      pencard: registrationData?.pencard ?? 'N/A', // Array of strings (images)
      location:registrationData?.location,
      email: registrationData?.email ?? 'N/A', // String
      password: registrationData?.password ?? 'N/A' // String
  };

  console.log(payload,'ppp');
  

  useUserRegisterMutation.mutate(payload,{
    onSuccess : (data) => {
      console.log(data?.data);


    }
  })
  }


  const handleUploadFront = async () => {

    launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    }, async (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log(response?.assets[0]);

        // uploadFileFireBase(filename,pathURL)
        // const url = await uploadFileFireBase(response.assets[0]?.fileName, response?.assets[0]?.uri)
        // console.log(url, 'Get File URL');
        updateField('diverRc', response?.assets[0]?.uri);
        setSelectedFrontImage(response?.assets[0]?.uri)

        // setSelectedImage(response?.assets[0]?.uri);
      }
    });
  };


  const handleUploadBack = async () => {

    launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    }, async (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log(response?.assets[0]);
        updateField('vehiclePlate', response?.assets[0]?.uri);
        setSelectedBackImage(response?.assets[0]?.uri)
        // uploadFileFireBase(filename,pathURL)
        // const url = await uploadFileFireBase(response.assets[0]?.fileName, response?.assets[0]?.uri)
        // console.log(url, 'Get File URL');

        // setSelectedImage(response?.assets[0]?.uri);
      }
    });
  };

  return (
    <Container statusBarBackgroundColor='#ffffff' statusBarStyle='dark-content' >
      <AppBar back />

      <View style={{ marginHorizontal: moderateScale(15) }} >

        <Text style={styles.headerText}>Vehicle Registration & number Plate details</Text>
        <Text style={styles.subText}>
          Upload focused photo of your Vehicle Registration & number Plate for faster verification
        </Text>
        <View></View>
        <View style={styles.mainBorder}>
          {!(!!selectedFrontImage) && <Text style={styles.label}>
            Front side photo of your Vehicle Registration with clear photo
          </Text>}
          {!!selectedFrontImage && <View style={styles.adhar}>
            <Image
              style={styles.adharSize}
              resizeMode='cover'
              source={{ uri: selectedFrontImage }}
            />
          </View>}
          {!(!!selectedFrontImage) && <TouchableOpacity onPress={handleUploadFront} style={styles.border}>
            <View style={styles.uploadContainer} >
              <CameraIcon />
              <Text style={styles.uploadText}>Upload</Text>
            </View>
          </TouchableOpacity>}

          {!!selectedFrontImage && <TouchableOpacity onPress={() => { setSelectedFrontImage('') }} style={styles.border}>
            <View style={styles.uploadContainer}>
              <Text style={styles.uploadText}>Uploaded</Text>
              <CloseCrossIcon />
            </View>
          </TouchableOpacity>}
        </View>
        <View style={styles.mainBorder}>
          {!(!!selectedBackImage) && <Text style={styles.label}>
            Front side photo of your Vehicle Number Plate with clear photo
          </Text>}

          {!!selectedBackImage && <View style={styles.adhar}>
            <Image
              style={styles.adharSize}
              resizeMode='cover'
              source={{ uri: selectedBackImage }}
            />
          </View>}
          {!(!!selectedBackImage) && <TouchableOpacity onPress={handleUploadBack} style={styles.border}>
            <View style={styles.uploadContainer} >
              <CameraIcon />
              <Text style={styles.uploadText}>Upload</Text>
            </View>
          </TouchableOpacity>}

          {!!selectedBackImage && <TouchableOpacity onPress={() => { setSelectedBackImage('') }} style={styles.border}>
            <View style={styles.uploadContainer}>
              <Text style={styles.uploadText}>Uploaded</Text>
              <CloseCrossIcon />
            </View>
          </TouchableOpacity>}
        </View>

      </View>
      {/* <Button onPress={() => { Navigation.navigate("ViewDocument") }} title="Submit" containerStyles={styles.submitButton} /> */}
      <PrimaryButton onPress={() => { handleUserRegistration()}} loading={useUserRegisterMutation?.isPending} disabled={useUserRegisterMutation?.isPending} buttonText='Submit' borderRadius={moderateScale(30)} marginVertical={moderateScaleVertical(15)} marginHorizontal={moderateScale(15)} />

      <CenterModalLoader loading={false} />
    </Container>
  )
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
  },
  subText: {
    fontSize: textScale(12),
    fontFamily: Fonts.Regular,
    color: '#888',
    marginBottom: moderateScaleVertical(15),
  },
  mainBorder: {
    width: WIDTH / 1.1,
    borderColor: color.black,
    borderRadius: 8,
    marginBottom: 15,
    justifyContent: 'center',
    borderStyle: 'dashed',
    height: moderateScale(200),
    borderWidth: 1,
    marginTop: spacingSizes.medium,
    alignSelf: 'center'
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: moderateScale(5)
  },
  uploadText: {
    fontSize: textScale(16),
    color: color.primary,
    fontFamily: Fonts.Medium
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
  },
  adharSize: {
    width: moderateScale(140),
    height: moderateScale(95),
    alignSelf: 'center',
    borderWidth: 1,
  },
  adhar: {
    borderWidth: 1,
    borderColor: color.grey,
    borderStyle: 'dashed',
    width: moderateScale(160),
    alignSelf: 'center',
    marginBottom: spacingSizes.medium,
    padding: spacingSizes.small,
  },
});
