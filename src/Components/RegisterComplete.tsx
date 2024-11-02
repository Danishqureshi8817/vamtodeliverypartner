import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Statusbar from '../common/component/Statusbar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../common/consts/color';
import { fontSizes, spacingSizes } from '../common/consts/size';
import { useNavigation } from '@react-navigation/native';
import { WIDTH } from '../common/consts/config';
import Button from '../common/component/Button';
import { Container } from '../common/component/global/Container';
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsiveSize';
import { BackIcon, GreaterIcon } from '../common/component/Icons';
import { Fonts } from '../utils/constant';
import Body from '../common/component/global/Body';

export default function RegisterComplete() {
  const Navigation = useNavigation<any>();
  return (
    <Container statusBarBackgroundColor='#ffffff' statusBarStyle='dark-content' backgroundColor={color.grey} >
  
      <View style={styles.registrationHeader}>
        <TouchableOpacity
          onPress={() => {
            Navigation.goBack();
          }}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.registration}>Registration Complete</Text>
        <View>

        </View>
      </View>
      {/* Red banner */}
      <View style={styles.banner}>
        <View>
          <Text style={styles.bannerTitle}>
            Your application is under Verification
          </Text>
          <Text style={styles.bannerSubtitle}>
            Account will get activated in 48hrs
          </Text>
        </View>
        <Image style={{ width: 91, height: 91 }} resizeMode='contain' source={require("../assets/img/explert.png")} />
      </View>

      <Body >
        {/* List items */}
        <View style={{marginTop:moderateScaleVertical(15)}}>

      
        {[
          { title: 'Personal Information', status: 'Approved' },
          {
            title: 'Personal Documents',
            status: 'Verification Pending',
            statusColor: 'red',
          },
          { title: 'Vehicle Details', status: 'Approved' },
          {
            title: 'Bank Account Details',
            status: 'Approved',
            highlighted: true,
          },
          { title: 'Emergency Details', status: 'Approved' },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.listItem,
              item.highlighted && styles.highlightedItem,
            ]}>
            <View style={styles.listTextContainer}>
              <Text style={styles.listTitle}>{item.title}</Text>
              <Text
                style={[
                  styles.listStatus,
                  { color: item.statusColor || 'green' },
                ]}>
                {item.status}
              </Text>
            </View>
            {/* <Text style={styles.listArrow}>›</Text> */}
            <GreaterIcon />
          </TouchableOpacity>
        ))}
  </View>
        <Button
          onPress={() => {
            Navigation.navigate('StorePage');
          }}
          containerStyles={styles.buttonBox}
          title="Order"
        />
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Need Help? </Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </Body>

    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    backgroundColor: '#ff4d4d',
    padding: 20,
    marginTop: moderateScaleVertical(80),
    // alignItems: 'center',
    flexDirection: "row",
    alignItems: "center",
    width: WIDTH / 1,
    height: moderateScale(150),

  },
  bannerTitle: {
    color: '#fff',
    fontSize: textScale(16),
    fontFamily: Fonts.Bold,
    width: WIDTH / 1.4
  },
  bannerSubtitle: {

    fontSize: textScale(18),
    fontFamily: Fonts.Medium,
  },
  content: {
    paddingVertical: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f8f8f8',
  },
  highlightedItem: {
    borderColor: '#2691C9',
  },
  listTextContainer: {
    flexDirection: 'column',
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listStatus: {
    fontSize: 14,
  },
  listArrow: {
    fontSize: 18,
    color: '#cccccc',
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    // padding: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#555',
  },
  footerLink: {
    fontSize: 14,
    color: '#ff4d4d',
    fontWeight: 'bold',
    marginTop: 5,
  },
  registrationHeader: {
    backgroundColor: color.white,
    height: moderateScale(45),
    borderBottomLeftRadius: spacingSizes.large,
    borderBottomRightRadius: spacingSizes.large,
    position: 'absolute',
    zIndex: 999,
    top: 0,
    marginTop: moderateScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingSizes.larger,
    width: WIDTH / 1,
    paddingHorizontal: moderateScale(15),
    justifyContent: 'space-between',
    paddingBottom: moderateScaleVertical(5)
  },
  registration: {
    color: color.black,
    fontSize: textScale(18),
    fontFamily: Fonts.Medium,
    textAlign: 'center',
  },
  buttonBox: {
    alignSelf: 'center',
    marginTop:moderateScaleVertical(25)
  },
});
