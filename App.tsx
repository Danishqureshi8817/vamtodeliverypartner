import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import AppNavigator from './src/navigatators/AppNavigator';
import 'react-native-gesture-handler';


export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      
    </NavigationContainer>
  );
}
  