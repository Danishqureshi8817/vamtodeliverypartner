import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HEIGHT, WIDTH } from '../common/consts/config';
import { spacingSizes } from '../common/consts/size';
import Statusbar from '../common/component/Statusbar';
import color from '../common/consts/color';
import Button from '../common/component/Button';
import { useNavigation } from '@react-navigation/native';
import { GreaterIcon } from '../common/component/Icons';
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsiveSize';
import PrimaryButton from '../common/component/global/PrimaryButton';
import { Container } from '../common/component/global/Container';
import { Fonts, shadowStyle } from '../utils/constant';
const documentItems = [
  'Personal Documents',
  'Vehicle Details',
  'Bank Account Details',
  'Emergency Details',
];
export default function DocumentUpload() {
  const Navigation = useNavigation<any>()
  return (
    <Container fullScreen={true} statusBarBackgroundColor='transparent' statusBarStyle='dark-content' >

      {/* Header */}
      <LinearGradient
        colors={['#FF5963', '#FFAF70']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.header}>
        <Text style={styles.headerText}>Welcome to Adiya Food</Text>
        <Text style={styles.subHeaderText}>
          Just a few steps to complete and then you can start earning with Us
        </Text>
      </LinearGradient>

      {/* Pending Documents Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pending Documents</Text>
        {documentItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => {
              Navigation.navigate("ViewDocument", { documentType: item });
            }}
          >
            <Text style={{
              fontSize: textScale(12),
              color: color.black,
              fontFamily: Fonts.Regular,
            }}>{item}</Text>
            <GreaterIcon />
          </TouchableOpacity>
        ))}
      </View>

      {/* Completed Documents Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Completed Documents</Text>
        <View style={styles.item}>
          <Text style={{
            fontSize: textScale(12),
            color: color.black,
            fontFamily: Fonts.Regular,
          }} >✔️ Personal Information</Text>
          <GreaterIcon />

        </View>
      </View>

      {/* Submit Button */}
      <PrimaryButton onPress={() => { Navigation.navigate("UploadDocument") }} buttonText='Submit' borderRadius={moderateScale(30)} marginVertical={moderateScaleVertical(15)} marginHorizontal={moderateScale(15)} />

    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  header: {
    height: moderateScale(200),
    justifyContent: 'center',
    paddingHorizontal: spacingSizes.mediumLarge,
    borderBottomRightRadius: moderateScale(30),
    borderBottomLeftRadius: moderateScale(30),
    // marginHorizontal: spacingSizes.smallMedium,
    // marginVertical: spacingSizes.small,
    ...shadowStyle
  },
  headerText: {
    fontSize: textScale(22),
    fontFamily: Fonts.Bold,
    color: color.white,
  },
  subHeaderText: {
    fontSize: textScale(12),
    color: color.white,
    fontFamily: Fonts.Regular,
    // textAlign: 'center',
    marginTop: spacingSizes.small,
    width: WIDTH / 1.4
  },
  section: {
    marginHorizontal: spacingSizes.medium,
    marginVertical: moderateScaleVertical(20),
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: spacingSizes.small,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacingSizes.medium,
    backgroundColor: color.white,
    borderRadius: spacingSizes.medium,
    marginBottom: spacingSizes.small,
    elevation: 1,
    marginVertical: spacingSizes.small,
    height: moderateScale(60)
  },
  submitButton: {
    marginHorizontal: spacingSizes.mediumLarge,
    marginVertical: spacingSizes.small,
    position: "absolute",
    bottom: spacingSizes.medium,
    alignSelf: "center"
  },
});
