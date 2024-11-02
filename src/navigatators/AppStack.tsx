import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../Components/Onboarding';
import OtpScreen from '../Components/OtpScreen';
import PersonalInformation from '../Components/PersonalInformation';
import DocumentUpload from '../Components/DocumentUpload';
import Splash from '../Components/Splash';
import UploadDocument from '../Components/UploadDocument';
import DocumentUpdate from '../Components/DocumentUpdate';
import ViewDocument from '../Components/ViewDocument';
import RegisterComplete from '../Components/RegisterComplete';
import Profile from '../Components/Profile';
import Orders from '../Components/Orders';
import StorePage from '../Components/StorePage';
import Footer from '../common/component/Footer';
import AskLeave from '../Components/AskLeave';
import BottomTabNavigator from './BottomTabNavigator';
import ReferEran from '../Components/ReferEran';


export default function AppStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
      <Stack.Screen name="DocumentUpload" component={DocumentUpload} />
      <Stack.Screen name="UploadDocument" component={UploadDocument} />
      <Stack.Screen name="DocumentUpdate" component={DocumentUpdate} />
      <Stack.Screen name="ViewDocument" component={ViewDocument} />
      <Stack.Screen name="RegisterComplete" component={RegisterComplete} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="StorePage" component={StorePage} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Footer" component={Footer} />
      <Stack.Screen name="AskLeave" component={AskLeave} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="ReferEarn" component={ReferEran} />



    </Stack.Navigator>
  );
}