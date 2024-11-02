import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import color from '../common/consts/color';
import { spacingSizes } from '../common/consts/size';
import { WIDTH } from '../common/consts/config';
import Statusbar from '../common/component/Statusbar';
import Footer from '../common/component/Footer';
import { useNavigation } from '@react-navigation/native';
import { CallPrimaryIcon, CameraGrayIcon, CameraIcon, FAQIcon, FavoritLocationIcon, GreaterIcon, GreaterPrimaryIcon, LogOutIcon, MessagePrimaryIcon, OpenMessageIcon, PrivacyIcon, ProfileUserIcon, ReferIcon, StarIcon, SupportIcon, TermsIcon, UserIcon, UserPrimaryIcon } from '../common/component/Icons';
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsiveSize';
import { Fonts, shadowStyle } from '../utils/constant';
import Body from '../common/component/global/Body';
import { Container } from '../common/component/global/Container';

export default function Profile() {
  const navigation = useNavigation<any>();

  const handleOptionPress = (label: string) => {
    if (label === 'Ask For Leave') {
      navigation.navigate('AskLeave'); // Navigate to AskLeave page
    }
    // Add other navigations here if needed
  };
  return (
    <Container statusBarBackgroundColor='#ffffff' statusBarStyle='dark-content' backgroundColor={color.grey} >

      <View style={styles.header}>
        <TouchableOpacity onPress={() => { }}>
          <UserIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account</Text>
      </View>
      <Body>
        <View style={styles.profileContainer}>
          <View style={styles.userBorder}>
            <Image
              source={require('../assets/img/users.png')}
              style={styles.profileImage}
            />
            <CameraGrayIcon style={{ position: 'absolute', bottom: 0, marginBottom: moderateScaleVertical(8) }} />
          </View>
          <View style={styles.profileInfo}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: moderateScale(8) }}>
                <UserPrimaryIcon />
                <Text style={styles.profileName}>Aman Sharma</Text>
              </View>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>4.9</Text>
                <StarIcon />
              </View>
            </View>
            <View style={styles.contactInfo}>
              <CallPrimaryIcon />
              <Text style={styles.contactText}>+91 9999988888</Text>
            </View>
            <View style={styles.contactInfo}>
              <MessagePrimaryIcon />
              <Text style={styles.contactText}>loremipsum@gmail.com</Text>
            </View>
          </View>
        </View>

        {/* Options List */}

        <TouchableOpacity

          style={styles.optionItem}
          onPress={() => { }}
        >
          <View style={styles.optionLabel}>
            <ProfileUserIcon />
            <Text
              style={[styles.optionText]}
            >
              Edit Profile
            </Text>
          </View>
          <GreaterPrimaryIcon />
        </TouchableOpacity>

        <TouchableOpacity

          style={styles.optionItem}
          onPress={() => { }}
        >
          <View style={styles.optionLabel}>
            <FavoritLocationIcon />
            <Text
              style={[styles.optionText]}
            >
              Allotted Area
            </Text>
          </View>
          <GreaterPrimaryIcon />
        </TouchableOpacity>

        <TouchableOpacity

          style={styles.optionItem}
          onPress={() => {navigation.navigate('ReferEarn') }}
        >
          <View style={styles.optionLabel}>
            <ReferIcon />
            <Text
              style={[styles.optionText]}
            >
              Refer and Earn
            </Text>
          </View>
          <GreaterPrimaryIcon />
        </TouchableOpacity>

        <TouchableOpacity

          style={styles.optionItem}
          onPress={() => { }}
        >
          <View style={styles.optionLabel}>
            <SupportIcon />
            <Text
              style={[styles.optionText]}
            >
              Support
            </Text>
          </View>
          <GreaterPrimaryIcon />
        </TouchableOpacity>

        <TouchableOpacity

          style={styles.optionItem}
          onPress={() => { }}
        >
          <View style={styles.optionLabel}>
            <FAQIcon />
            <Text
              style={[styles.optionText]}
            >
              FAQ
            </Text>
          </View>
          <GreaterPrimaryIcon />
        </TouchableOpacity>
        <TouchableOpacity

          style={styles.optionItem}
          onPress={() => { }}
        >
          <View style={styles.optionLabel}>
            <TermsIcon />
            <Text
              style={[styles.optionText]}
            >
             Terms and Conditions
            </Text>
          </View>
          <GreaterPrimaryIcon />
        </TouchableOpacity>
        <TouchableOpacity

          style={styles.optionItem}
          onPress={() => { }}
        >
          <View style={styles.optionLabel}>
            <PrivacyIcon />
            <Text
              style={[styles.optionText]}
            >
              Privacy Policy
            </Text>
          </View>
          <GreaterPrimaryIcon />
        </TouchableOpacity>

        <TouchableOpacity

          style={styles.optionItem}
          onPress={() => { }}
        >
          <View style={styles.optionLabel}>
            <OpenMessageIcon />
            <Text
              style={[styles.optionText]}
            >
              Ask For Leave
            </Text>
          </View>
          <GreaterPrimaryIcon />
        </TouchableOpacity>
        <TouchableOpacity

          style={styles.optionItem}
          onPress={() => { }}
        >
          <View style={styles.optionLabel}>
            <LogOutIcon />
            <Text
              style={[styles.optionText,{color:color.primary}]}
            >
              Log Out
            </Text>
          </View>
          <GreaterPrimaryIcon />
        </TouchableOpacity>
   
      </Body>
      {/* Bottom Navigation */}
      {/* <Footer /> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.grey,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: color.white,
    width: WIDTH / 1,
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomLeftRadius: moderateScale(25),
    borderBottomRightRadius: moderateScale(25),

  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(16),
    // marginBottom: 10,
    marginTop: spacingSizes.small,
    gap: moderateScale(15),

  },
  profileImage: {
    width: '90%',
    height: '90%',
    borderRadius: moderateScale(30),
  },
  profileInfo: {
    // marginLeft: 16,
    // backgroundColor:'red',
    flex: 1

  },
  profileName: {
    fontSize: textScale(14),
    fontFamily: Fonts.Regular,
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(5),
    backgroundColor: '#fff',
    paddingHorizontal: moderateScale(8),
    borderRadius: moderateScale(15),
    paddingVertical: moderateScaleVertical(4)
  },
  ratingText: {
    fontSize: textScale(14),
    fontFamily: Fonts.Regular,
    color: '#2B2E35',
    // marginRight: 4,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: moderateScale(8)
  },
  contactText: {
    fontSize: textScale(14),
    fontFamily: Fonts.Regular,
    color: '#2B2E35',
    marginLeft: 4,
  },
  optionsContainer: {
    // backgroundColor: '#FFF',
    paddingVertical: 8,

  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(15),
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginVertical: spacingSizes.small,
    marginHorizontal: spacingSizes.medium,
    borderRadius: spacingSizes.mediumLarge,
    backgroundColor: color.white,
    height: moderateScale(55),
    ...shadowStyle

  },
  optionLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(15)

  },
  optionText: {
    fontSize: textScale(14),
    fontFamily: Fonts.Medium,
    color: '#292D32',
    // marginLeft: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#C4C4C4',
    marginTop: 4,
  },
  userBorder: {
    borderWidth: 1,
    borderRadius: spacingSizes.xxxxxlarge,
    borderColor: '#FB9A4D',
    height: moderateScale(90),
    width: moderateScale(90),
    alignItems: 'center',
    justifyContent: 'center'
  },
});
