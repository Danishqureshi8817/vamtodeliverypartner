import { AppState } from 'react-native';
import { focusManager, QueryClient } from '@tanstack/react-query';
// import NetInfo from '@react-native-community/netinfo';



export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: Infinity
    },
    mutations: {
      onError: console.log,
      // onSuccess: console.log,
    },
  },
});


focusManager.setEventListener((handleFocus: any) => {
  AppState.addEventListener('change', handleFocus);
  return () => {
    console.log('removeEventListener')
  };
});