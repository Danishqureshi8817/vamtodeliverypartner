import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { spacingSizes } from '../consts/size';
import AntDesign from "react-native-vector-icons/AntDesign"
import { BagBlackIcon, BagIcon, UserIcon, UserWhiteIcon } from './Icons';
import { moderateScale } from '../../utils/responsiveSize';
import { shadowStyle } from '../../utils/constant';
export default function Footer() {
  const navigation = useNavigation<any>();
  const [activeTabs, setActiveTabs] = useState<string | null>('Orders');

  useEffect(() => {
    // Retrieve the last selected tab from AsyncStorage when the component mounts
    const getActiveTab = async () => {
      const savedTab = await AsyncStorage.getItem('activeTab');
      setActiveTabs(savedTab || 'Orders'); // Default to 'Orders' if no saved tab
    };
    getActiveTab();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const checkCurrentTab = async () => {
        const currentTab = await AsyncStorage.getItem('activeTab');
        if (currentTab) {
          setActiveTabs(currentTab);
        }
      };

      checkCurrentTab();
    }, [])
  );

  const handleTabPress = async (tab: string) => {
    setActiveTabs(tab); // Update active tab state
    await AsyncStorage.setItem('activeTab', tab); // Save selected tab to AsyncStorage

    if (tab === 'Account') {
      navigation.navigate('Profile');
    } else if (tab === 'Orders') {
      navigation.navigate('StorePage');
    }
  };

  return (
    <View style={styles.container}>
      {/* Tab Footer */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButtons,
            activeTabs === 'Orders' && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress('Orders')}>
          {/* <Ionicons
            name="clipboard"
            size={20}
            color={activeTabs === 'Orders' ? '#FFF' : '#333'}
          /> */}
          {
            activeTabs === 'Orders' ?
              <BagIcon /> : <BagBlackIcon />
          }
          <Text
            style={[
              styles.tabText,
              activeTabs === 'Orders' && styles.activeTabTexts,
            ]}>
            Orders
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButtons,
            activeTabs === 'Account' && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress('Account')}>
          {/* <AntDesign
            name="medicinebox"
            size={20}
            color={activeTabs === 'Account' ? '#FFF' : '#333'}
          /> */}
          {
            activeTabs === 'Account' ?
              <UserWhiteIcon /> : <UserIcon />
          }
          <Text
            style={[
              styles.tabText,
              activeTabs === 'Account' && styles.activeTabTexts,
            ]}>
            Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.3,
    // backgroundColor: 'red',
    position:'absolute',
    bottom:0,
    width:'100%'
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    // position: 'absolute',
    // bottom: 0,
    width: '100%',
    paddingHorizontal: moderateScale(20),
    borderTopLeftRadius:moderateScale(25),
    borderTopRightRadius:moderateScale(25),
    ...shadowStyle
  },
  tabButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    gap: spacingSizes.smallMedium,
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor: '#FF5252',
    fontSize: 18,
    fontWeight: '600',
  },
  tabText: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  activeTabTexts: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
