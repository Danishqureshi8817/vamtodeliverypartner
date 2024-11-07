import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
  Alert,
  Pressable,
} from 'react-native';
import color from '../common/consts/color';
import { fontSizes, spacingSizes } from '../common/consts/size';
import Statusbar from '../common/component/Statusbar';
import Footer from '../common/component/Footer';
import { useNavigation } from '@react-navigation/native';
import { WIDTH } from '../common/consts/config';
import { Image } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsiveSize';
import { Fonts, shadowStyle } from '../utils/constant';
import { Container } from '../common/component/global/Container';
import { CallCircleIcon, CheckDoneIcon, DownColorIcon, LocationCircleIcon, LocationMarkIcon, MoneyIcon, PickHandIcon, UserPrimaryIcon } from '../common/component/Icons';
import { imagePath } from '../assets/img';
// Sample data based on your screenshot
const orderData = [
  { orderNo: '#11250', status: 'Pickup Pending', statusColor: '#FFE0E0' },
  { orderNo: '#11251', status: 'Pickup Failed', statusColor: '#FFE0E0' },
  { orderNo: '#11252', status: 'Pickup Rescheduled', statusColor: '#E0F3FF' },
  { orderNo: '#11251', status: 'Delivery Failed', statusColor: '#FFE0E0' },
  { orderNo: '#11253', status: 'Delivered', statusColor: '#E0FFE0' },
  { orderNo: '#11250', status: 'Delivery Pending', statusColor: '#FFE0E0' },
  { orderNo: '#11252', status: 'Delivery Rescheduled', statusColor: '#E0F3FF' },
  { orderNo: '#11253', status: 'Delivery Rescheduled', statusColor: '#E0F3FF' },
  { orderNo: '#11254', status: 'Delivery Rescheduled', statusColor: '#E0F3FF' },
  { orderNo: '#11255', status: 'Delivery Rescheduled', statusColor: '#E0F3FF' },
];

export default function StorePage() {
  const [activeTab, setActiveTab] = useState('Store');
  const [selectedOrderId, setSelectedOrderId] = useState('')


  const renderOrderItem = ({ item }: any) => (
    <View style={styles.orderContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: moderateScale(10), paddingTop: moderateScaleVertical(5) }}>
        <View style={styles.orderDetails}>
          <View>
            <Text style={styles.orderNumber}>Order No. </Text>
            <Text style={styles.orderNumber}>{item.orderNo}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.statusButton, { backgroundColor: item?.status.toLowerCase().includes("failed") ? 'rgba(252, 88, 98, 0.2)' : item?.status.toLowerCase().includes("rescheduled") ? 'rgba(151, 200, 255, 0.2)' : item?.status.toLowerCase().includes("delivered") ? 'rgba(150, 255, 178, 0.2)' : 'rgba(252, 88, 98, 0.2)' }]}>
          <Text style={[styles.statusText, { color: item?.status.toLowerCase().includes("failed") ? color.primary : item?.status.toLowerCase().includes("rescheduled") ? '#0050AA' : item?.status.toLowerCase().includes("delivered") ? '#34A853' : color.primary }]}>{item.status}</Text>
        </TouchableOpacity>
      </View>

      <View style={{ borderTopWidth: 1, borderStyle: 'dashed', borderTopColor: '#4A5568', marginVertical: moderateScaleVertical(10), paddingVertical: moderateScaleVertical(8), gap: moderateScale(10) }}>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: moderateScale(15), paddingHorizontal: moderateScale(10) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: moderateScale(10) }}>
            <UserPrimaryIcon />
            <Text style={{ fontSize: textScale(14), fontFamily: Fonts.Bold, color: '#2B2E35', flex: 0.8 }} numberOfLines={1}>Aman Sharma</Text>
          </View>

          <CallCircleIcon style={{ marginLeft: moderateScale(10) }} />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: moderateScale(10),borderBottomWidth:0.5,borderBottomColor:'#4A5568',paddingBottom:moderateScaleVertical(8) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: moderateScale(10) }}>
            <PickHandIcon style={{ alignSelf: 'flex-start', marginTop: moderateScaleVertical(5) }} />
            <View style={{ flex: 0.76, }}>

              <Text style={{ fontSize: textScale(14), fontFamily: Fonts.Medium, color: '#2B2E35' }} numberOfLines={1}>Pickup Center-1</Text>
              <Text style={{ fontSize: textScale(12), fontFamily: Fonts.Regular, color: '#57585A' }} numberOfLines={2}>Ananta Stores, 204/C, Apts
                Andheri East 400069</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: moderateScale(10),marginTop:moderateScaleVertical(5) }}>
                <Image source={imagePath.productImg} style={{ resizeMode: 'contain', width: moderateScale(70), height: moderateScale(70) }} />

                <View>
                  <Text style={{ fontSize: textScale(14), fontFamily: Fonts.Medium, color: '#2B2E35' }} numberOfLines={1}>Atta Ladoo</Text>
                  <Text style={{ fontSize: textScale(14), fontFamily: Fonts.Regular, color: '#57585A' }} numberOfLines={1}>500g</Text>
                  <Text style={{ fontSize: textScale(14), fontFamily: Fonts.Regular, color: '#000000' }} numberOfLines={1}>Qty :  <Text style={{ fontSize: textScale(14), fontFamily: Fonts.Regular, color: '#57585A' }} numberOfLines={1}>3</Text></Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: moderateScale(10),alignSelf:'flex-start' }}>
            <LocationCircleIcon />
            <CallCircleIcon />
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: moderateScale(10), }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: moderateScale(10) }}>
            <LocationMarkIcon style={{ alignSelf: 'flex-start', marginTop: moderateScaleVertical(5) }} />
            <View style={{ flex: 0.9, gap:moderateScale(5)}}>

              <Text style={{ fontSize: textScale(14), fontFamily: Fonts.Medium, color: '#2B2E35' }} numberOfLines={1}>Delivery</Text>
              <Text style={{ fontSize: textScale(12), fontFamily: Fonts.Regular, color: '#57585A' }} numberOfLines={2}>201/D, Ananta Apts, Near
              Jal Bhawan, Andheri 400069</Text>

              <View style={{ flexDirection: 'row', alignItems: 'center',gap:moderateScale(15)}}>
                <View style={{ flexDirection: 'row', alignItems: 'center',gap:moderateScale(5)}}>
                  <MoneyIcon/>
                  <Text style={{ fontSize: textScale(14), fontFamily: Fonts.SemiBold, color: '#2F3236' }} numberOfLines={1}>{'\u20B9'} 2300</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center',gap:moderateScale(5)}}>
                  <CheckDoneIcon/>
                  <Text style={{ fontSize: textScale(14), fontFamily: Fonts.SemiBold, color: '#34A853' }} numberOfLines={1}>Paid</Text>
                </View>
              </View>

            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: moderateScale(10),alignSelf:'flex-start' }}>
            <LocationCircleIcon />
          </View>
        </View>

        <View style={{backgroundColor:'rgba(255,89,99,0.1)',height:moderateScale(60)}}>

        </View>


      </View>
      <Pressable onPress={()=>{setSelectedOrderId('11')}} style={{ alignSelf: 'center',paddingBottom:moderateScaleVertical(15) }} >

      <DownColorIcon />
      </Pressable>
    </View>
  );

  return (
    <Container statusBarBackgroundColor='#ffffff' statusBarStyle='dark-content' backgroundColor='#F5F5F5'>


      {/* <Statusbar backgroundColor={color.white} /> */}
      <View style={{ flex: 1 }}>
        <View style={styles.registrationHeader}>
          <TouchableOpacity>
            <Image style={{ height: 24, width: 24 }} resizeMode='contain' source={require("../assets/img/Bag.png")} />
          </TouchableOpacity>
          <Text style={styles.registration}>Orders</Text>
        </View>
        {/* Header with Tabs */}
        <View style={styles.headerContainer}>
          {/* <View style={styles.tab}>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'Meal' && styles.activeTab]}
              onPress={() => setActiveTab('Meal')}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'Meal' && styles.activeTabText,
                ]}>
                Meal
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'Store' && styles.activeTab,
              ]}
              onPress={() => setActiveTab('Store')}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'Store' && styles.activeTabText,
                ]}>
                Store
              </Text>
            </TouchableOpacity>
          </View> */}
          <View>
            
          </View>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => Alert.alert('Date Selector Clicked')}>
            <Text style={styles.dateText}>24/08/2023</Text>
            <DownColorIcon />
          </TouchableOpacity>
        </View>

        {/* Tap to Expand */}
        <Text style={styles.expandText}>Tap to Expand</Text>

        {/* Orders List */}
        <FlatList
          data={orderData}
          renderItem={renderOrderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ marginHorizontal: moderateScale(15), paddingBottom: moderateScaleVertical(6), gap: moderateScale(15) }}
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {/* <Footer /> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
    backgroundColor: color.white,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,

  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: color.white,
    // marginRight: 5,
  },
  activeTab: {
    backgroundColor: color.red,
  },
  tabText: {
    color: '#888',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FFF',
  },
  dateButton: {
    paddingHorizontal: moderateScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(5),
    backgroundColor: color.white,
    paddingVertical: moderateScaleVertical(7),
    borderRadius: moderateScale(15),
    // marginLeft:moderateScale(15)
    marginRight: moderateScale(15)
  },
  dateText: {
    color: '#333',
    fontWeight: '500',
  },
  expandText: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 10,
  },
  orderContainer: {
    backgroundColor: '#FFFFFF',
    // padding: 10,
    // marginVertical: 5,
    borderRadius: moderateScale(8),
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#EEEEEE',
    // height: moderateScale(70),
    ...shadowStyle
  },
  orderDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderNumber: {
    fontSize: textScale(14),
    fontFamily: Fonts.Medium,
    color: '#2B2E35'
  },
  statusButton: {
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(5),
    height: moderateScale(30)
  },
  statusText: {
    fontSize: textScale(12),
    fontFamily: Fonts.Regular
  },
  tab: {
    flexDirection: 'row',
    // alignItems: 'center',
    gap: spacingSizes.medium,
    backgroundColor: '#fff',
    borderRadius: moderateScale(25),
    marginHorizontal: moderateScale(15)

  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    borderRadius: spacingSizes.larger,
  },
  registration: {
    color: color.black,
    fontWeight: '600',
    fontSize: fontSizes.smLarge,
    textAlign: 'center',
  },
  registrationHeader: {
    // backgroundColor: color.white,
    height: moderateScale(50),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingSizes.small,
    marginBottom: spacingSizes.medium,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBottomLeftRadius: moderateScale(25),
    borderBottomRightRadius: moderateScale(25),
    ...shadowStyle


    // width: WIDTH / 1,
  },
});
