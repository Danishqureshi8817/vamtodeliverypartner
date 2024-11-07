import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './src/navigatators/AppNavigator';
import 'react-native-gesture-handler';
import { RegistrationProvider } from './src/context/registration';
import Toast from 'react-native-toast-message';


export default function App() {
  return (
    <NavigationContainer>
        <RegistrationProvider>
          <>
            <AppNavigator />
            <Toast visibilityTime={3000} position='bottom' />
          </>
        </RegistrationProvider>
    </NavigationContainer>
  );
}
