import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Statusbar from '../common/component/Statusbar';
import color from '../common/consts/color';
import { fontSizes, spacingSizes } from '../common/consts/size';
import Input from '../common/component/TextInput';
import Button from '../common/component/Button';
import { WIDTH } from '../common/consts/config';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { Fonts } from '../utils/constant';
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsiveSize';
import { CalenderIcon, CameraIcon } from '../common/component/Icons';
import PrimaryButton from '../common/component/global/PrimaryButton';
import { launchImageLibrary } from 'react-native-image-picker';
import { Container } from '../common/component/global/Container';
import Body from '../common/component/global/Body';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CheckBox from '@react-native-community/checkbox';
import { personalInfoSchema } from '../utils/validationSchema';
import { errorToast } from '../utils/helperFunctions';
import { uploadFileFireBase } from '../utils/firebase-file-upload';
import { useRegistration } from '../context/registration';


export default function PersonalInformation() {
  // init
  const Navigation = useNavigation<any>()
  const { registrationData, updateField, validateForm } = useRegistration();

  // state
  const [selectedImage, setSelectedImage] = useState(null);
  const [datePickerModel, setDatePickerModel] = useState(false);
  const [selectedUpiType, setSelectedUpiType] = useState('')

  // formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { name: '', mobile: '', paymentType: '', bankName: '', ifscCode: '', accountNumber: '', upiId: '', vehicleDetails: '', location: [0, 0], email: '', password: '' },
    validationSchema: personalInfoSchema,
    onSubmit: values => {
      if (!(!!selectedUpiType)) {
        errorToast('Please select payment type')
        // errorToast('Please select payment type')
      } else {
        console.log(values);
        updateField('name',formik?.values?.name)
        updateField('mobile',formik?.values?.mobile)
        updateField('paymentType',selectedUpiType)
        updateField('bankName',formik?.values?.bankName)
        updateField('ifscCode',formik?.values?.ifscCode)
        updateField('accountNumber',formik?.values?.accountNumber)
        updateField('upiId',formik?.values?.upiId)
        updateField('vehicleDetails',formik?.values?.vehicleDetails)
        updateField('email',formik?.values?.email)
        updateField('password',formik?.values?.password)
        // updateField('mobile',)

        Navigation.navigate("UploadAadhar")
      }
    }

  })

  // console.log(formik.errors,'kjkjkj');


  const hideDatePicker = () => {
    setDatePickerModel(false);
  };

  const handleConfirm = (date: any) => {

    const utcDate = new Date(date);

    // Get the local date string
    const localDateString = utcDate.toISOString();
    console.log("A date has been picked: ", localDateString);
    // formik.setFieldValue('slotdateday', localDateString)

    hideDatePicker();
  };

  const selectImage = async () => {

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

        setSelectedImage(response?.assets[0]?.uri);
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
          <Input placeholder="Please enter your name" label="Name"
            value={formik.values.name}
            onChangeText={formik.handleChange('name')}
            inputProps={{
              onBlur: formik.handleBlur('name')
            }}
          />

          {(formik.errors.name && formik.touched.name) ? <Text style={{ fontFamily: Fonts.Regular, color: 'red', fontSize: textScale(12) }}>{formik.errors.name}</Text> : null}
          <Input placeholder="Please enter your mobile number" label="Mobile"
            value={formik.values.mobile}
            onChangeText={formik.handleChange('mobile')}
            inputProps={{
              onBlur: formik.handleBlur('mobile'),
              keyboardType: 'number-pad'

            }}
          />
          {(formik.errors.mobile && formik.touched.mobile) ? <Text style={{ fontFamily: Fonts.Regular, color: 'red', fontSize: textScale(12) }}>{formik.errors.mobile}</Text> : null}

          <Text style={{ color: '#000', fontFamily: Fonts.Regular, fontSize: textScale(14), marginVertical: moderateScaleVertical(5) }}>PaymentType</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: moderateScale(15) }}>
            <Pressable onPress={() => setSelectedUpiType('upi')} style={{ flexDirection: 'row', alignItems: 'center', gap: moderateScale(8) }}>
              <View style={{ borderWidth: 1, width: moderateScale(25), height: moderateScale(25), borderRadius: moderateScale(20), alignItems: 'center', justifyContent: 'center',overflow:'hidden' }}>
                <View style={{ backgroundColor: selectedUpiType === 'upi' ? color.primary : 'transparent', width: '75%', height: '75%', borderRadius: moderateScale(25) }}>
                </View>
              </View>
              <Text style={{ color: '#000', fontFamily: Fonts.Medium, fontSize: textScale(14), marginVertical: moderateScaleVertical(5) }}>Upi</Text>
            </Pressable>

            <Pressable onPress={() => setSelectedUpiType('bank')} style={{ flexDirection: 'row', alignItems: 'center', gap: moderateScale(8) }}>
              <View style={{ borderWidth: 1, width: moderateScale(25), height: moderateScale(25), borderRadius: moderateScale(20), alignItems: 'center', justifyContent: 'center',overflow:'hidden' }}>
                <View style={{ backgroundColor: selectedUpiType === 'bank' ? color.primary : 'transparent', width: '75%', height: '75%', borderRadius: moderateScale(25) }}>
                </View>
              </View>
              <Text style={{ color: '#000', fontFamily: Fonts.Medium, fontSize: textScale(14), marginVertical: moderateScaleVertical(5) }}>Bank</Text>
            </Pressable>
          </View>

          <Input placeholder="Please enter upi ID" label="Upi ID"
            value={formik.values.upiId}
            onChangeText={formik.handleChange('upiId')}
            inputProps={{
              onBlur: formik.handleBlur('upiId')
            }}
          />
          {(formik.errors.upiId && formik.touched.upiId) ? <Text style={{ fontFamily: Fonts.Regular, color: 'red', fontSize: textScale(12) }}>{formik.errors.upiId}</Text> : null}

          <Input placeholder="Please enter your bank name" label="Bank Name"
            value={formik.values.bankName}
            onChangeText={formik.handleChange('bankName')}
            inputProps={{
              onBlur: formik.handleBlur('bankName')
            }}
          />
          {(formik.errors.bankName && formik.touched.bankName) ? <Text style={{ fontFamily: Fonts.Regular, color: 'red', fontSize: textScale(12) }}>{formik.errors.bankName}</Text> : null}


          <Input placeholder="Please enter your IFSC code" label="IFSC Code"
            value={formik.values.ifscCode}
            onChangeText={formik.handleChange('ifscCode')}
            inputProps={{
              onBlur: formik.handleBlur('ifscCode')
            }} />
          {(formik.errors.ifscCode && formik.touched.ifscCode) ? <Text style={{ fontFamily: Fonts.Regular, color: 'red', fontSize: textScale(12) }}>{formik.errors.ifscCode}</Text> : null}

          <Input placeholder="Please enter your account number" label="Account NUmber"
            value={formik.values.accountNumber}
            onChangeText={formik.handleChange('accountNumber')}
            inputProps={{
              onBlur: formik.handleBlur('accountNumber')
            }}
          />
          {(formik.errors.accountNumber && formik.touched.accountNumber) ? <Text style={{ fontFamily: Fonts.Regular, color: 'red', fontSize: textScale(12) }}>{formik.errors.accountNumber}</Text> : null}

          {/* <Text style={{ color: '#000', fontFamily: Fonts.Regular, fontSize: textScale(14), marginVertical: moderateScaleVertical(5) }}>Date of birth</Text>

          <Pressable onPress={() => setDatePickerModel(true)} style={{
            paddingHorizontal: spacingSizes.medium,
            paddingVertical: spacingSizes.medium,
            width: '100%',
            height: moderateScale(50),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 0.5,
            borderColor: Colors.black,
            borderRadius: spacingSizes.smallMedium,
          }}>

            <Text style={{ color: '#000', fontFamily: Fonts.Regular, fontSize: textScale(14) }}> hhj</Text>
            <CalenderIcon />

          </Pressable> */}

          <Input placeholder="Ex model, variant, color, chassis number, engine number, fuel type" label="Vehicle Details"
            value={formik.values.vehicleDetails}
            onChangeText={formik.handleChange('vehicleDetails')}
            inputProps={{
              onBlur: formik.handleBlur('vehicleDetails')
            }}
          />
          {(formik.errors.vehicleDetails && formik.touched.vehicleDetails) ? <Text style={{ fontFamily: Fonts.Regular, color: 'red', fontSize: textScale(12) }}>{formik.errors.vehicleDetails}</Text> : null}

          <Input placeholder="Enter email" label="Email"
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            inputProps={{
              onBlur: formik.handleBlur('email'),
              keyboardType: 'email-address'
            }}
          />
          {(formik.errors.email && formik.touched.email) ? <Text style={{ fontFamily: Fonts.Regular, color: 'red', fontSize: textScale(12) }}>{formik.errors.email}</Text> : null}

          <Input placeholder="Enter password" label="Password"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            inputProps={{
              onBlur: formik.handleBlur('password')
            }}
          />
          {(formik.errors.password && formik.touched.password) ? <Text style={{ fontFamily: Fonts.Regular, color: 'red', fontSize: textScale(12) }}>{formik.errors.password}</Text> : null}


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
            <Pressable onPress={() => selectImage()} style={styles.borderbox}>
              <CameraIcon />
              <Text style={styles.uploadText}>Upload Photo</Text>
            </Pressable>
          </View>
          {/* <Input label="Referral code (Optional)" /> */}

          <PrimaryButton onPress={formik.handleSubmit} buttonText='Next' borderRadius={moderateScale(30)} marginVertical={moderateScaleVertical(15)} />

        </View>
      </Body>
      <DateTimePickerModal
        isVisible={datePickerModel}
        mode='date'
        date={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      // minimumDate={today}
      />
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
