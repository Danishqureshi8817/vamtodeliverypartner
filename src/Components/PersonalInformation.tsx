import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Statusbar from '../common/component/Statusbar';
import color from '../common/consts/color';
import { fontSizes, spacingSizes } from '../common/consts/size';
import Input from '../common/component/TextInput';
import Button from '../common/component/Button';
import { WIDTH } from '../common/consts/config';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../utils/constant';
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsiveSize';
import { CameraIcon } from '../common/component/Icons';
import PrimaryButton from '../common/component/global/PrimaryButton';
import { launchImageLibrary } from 'react-native-image-picker';
import { Container } from '../common/component/global/Container';
import Body from '../common/component/global/Body';
export default function PersonalInformation() {
  const Navigation = useNavigation<any>()

  const [selectedImage, setSelectedImage] = useState(null);

  const selectImage = () => {

    launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    }, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };
  return (
    <Container statusBarBackgroundColor='#ffffff' statusBarStyle='dark-content' >

      <Body >
        <View style={{ marginHorizontal: spacingSizes.medium }}>
          <Text style={styles.personalText}>Personal information</Text>
          <Text style={styles.subTitle}>
            Enter the details below so we can get to know and serve you better
          </Text>
          <Input placeholder="Please enter first name" label="First Name" />
          <Input placeholder="Please enter last name" label="Last Name" />
          <Input placeholder="Please enter father’s name" label="Father Name" />
          <Input placeholder="dd-mm-yyyy" label="Date of birth" />
          <Input placeholder="+91 9999988888" label="Primary mobile number" />
          <Input placeholder="+91 9999988888" label="WhatsApp number" />
          <Input
            placeholder="e.g. 9999999999"
            label="Secondary mobile number (Optional)"
          />
          <Input placeholder="Enter blood group here" label="Blood Group" />
          <Input placeholder="e.g. Bangalore" label="City" />
          <Input
            placeholder="Search address"
            label="Enter complete address here"
          />
          <Input
            placeholder="Select one or multiple"
            label="Languages you know"
          />
          <Input
            label="Languages you know"
            placeholder="Enter languages you know"
          />

          <Text style={styles.userProfile}>Your Profile Picture</Text>
          <View style={styles.box}>
            {
              !!selectedImage ? <Image
                style={styles.imageUser}
                resizeMode="contain"
                source={{ uri: selectedImage }}
              /> :
                <Image
                  style={styles.imageUser}
                  resizeMode="contain"
                  source={require('../assets/img/User.png')}
                />
            }
            {/* <Image
              style={styles.imageUser}
              resizeMode="contain"
              source={require('../assets/img/User.png')}
            /> */}
            <Pressable onPress={selectImage} style={styles.borderbox}>
              {/* <Entypo color={color.red} name="camera" size={spacingSizes.large} /> */}
              <CameraIcon />
              <Text style={styles.uploadText}>Upload Photo</Text>
            </Pressable>
          </View>
          <Input label="Referral code (Optional)" />

          <PrimaryButton onPress={() => { Navigation.navigate("DocumentUpload") }} buttonText='Submit' borderRadius={moderateScale(30)} marginVertical={moderateScaleVertical(15)} />

        </View>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    // marginHorizontal: spacingSizes.mediumLarge,

  },
  personalText: {
    fontSize: textScale(20),
    color: color.black,
    fontFamily: Fonts.Medium
  },
  subTitle: {
    fontSize: textScale(14),
    color: color.black,
    fontFamily: Fonts.Regular
  },
  buttonBox: {
    alignSelf: 'center',
    marginTop: spacingSizes.mediumLarge,
    marginBottom: spacingSizes.medium
    // width: WIDTH / 1.1,
  },
  box: {
    borderWidth: 0.5,
    borderStyle: 'dashed',
    borderColor: color.grey,
    marginTop: spacingSizes.smallMedium,
    borderRadius: spacingSizes.mediumLarge,
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(15),
    // width: WIDTH / 1.1,
    gap: moderateScale(30),
  },
  imageUser: {
    width: spacingSizes.xxlarge,
    height: spacingSizes.xxlarge,
  },
  borderbox: {
    borderWidth: 1,
    borderColor: '#FF596366',
    flexDirection: 'row',
    justifyContent: 'center',
    width: WIDTH / 2,
    borderRadius: spacingSizes.mediumLarge,
    padding: spacingSizes.small,
    gap: spacingSizes.medium,
  },
  uploadText: {
    color: color.red,
    fontSize: fontSizes.mediumLarge,
  },
  userProfile: {
    color: color.black,
    marginTop: spacingSizes.medium,
  },
});
