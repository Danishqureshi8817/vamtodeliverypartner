import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Create these icon components
import Orders from '../Components/Orders';
import Profile from '../Components/Profile';
import { BagBlackIcon, BagIcon, UserIcon, UserWhiteIcon } from '../common/component/Icons';
import StorePage from '../Components/StorePage';
import { moderateScale, textScale } from '../utils/responsiveSize';
import { Fonts } from '../utils/constant';
import color from '../common/consts/color';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }: any) => {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Orders Button */}
        <TouchableOpacity
          style={[styles.ordersButton,{backgroundColor:state.index === 0 ? '#FF4757' :'transparent'}]}
          onPress={() => navigation.navigate('Orders')}
        >
          {/* <OrdersIcon color="white" size={24} /> */}
          {state.index === 0 ? <BagIcon /> : <BagBlackIcon />}
          <Text style={[styles.ordersText,{color:state.index === 0 ? '#fff' :'#2B2E35'}]}>Orders</Text>
        </TouchableOpacity>

        {/* Account Tab */}
        <TouchableOpacity
          style={[styles.accountTab,{backgroundColor:state.index === 1 ? color.primary :'transparent'}]}
          onPress={() => navigation.navigate('Account')}
        >
          {/* <AccountIcon 
            color={state.index === 1 ? '#FF4757' : '#757575'} 
            size={24} 
          /> */}
           {state.index === 1 ? <UserWhiteIcon /> : <UserIcon />}
          <Text style={[
            styles.accountText,
            {color:state.index === 1 ? '#fff' :'#2B2E35'}
          ]}>
            Account
          </Text>
        </TouchableOpacity>
      </View>
      {/* Bottom Line Indicator */}
      {/* <View style={styles.bottomLine} /> */}
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Orders" component={StorePage} />
      <Tab.Screen name="Account" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: moderateScale(12),
    paddingBottom: Platform.OS === 'ios' ? moderateScale(24) : moderateScale(12),
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    borderTopRightRadius:moderateScale(30),
    borderTopLeftRadius:moderateScale(30),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(24),
  },
  ordersButton: {
    // backgroundColor: '#FF4757',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(30),
    borderRadius: moderateScale(8),
    gap: moderateScale(8),
  },
  ordersText: {
    color: 'white',
    fontSize: textScale(14),
    fontFamily: Fonts.SemiBold
  },
  accountTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(30),
    borderRadius: moderateScale(8),
    gap: moderateScale(8),
  },
  accountText: {
    fontSize: textScale(14),
    fontFamily: Fonts.SemiBold
  },
  // bottomLine: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: '50%',
  //   width: 80,
  //   height: 4,
  //   backgroundColor: '#E0E0E0',
  //   borderRadius: 2,
  //   transform: [{ translateX: -40 }],
  // },
});

export default BottomTabNavigator;