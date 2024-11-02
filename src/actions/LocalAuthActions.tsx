import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { Dispatch } from 'redux';
import {
  LOGIN_LOCAL,
  LOGOUT_LOCAL,
  SET_USER_INFO,
  UPDATE_CASE_FLAG,
} from './types';

// Action types
type ActionType<T = any> = {
  type: string;
  payload: T;
};

// Action creators
export const loginLocal = (): ActionType<boolean> => ({
  type: LOGIN_LOCAL,
  payload: true,
});

export const logoutLocal = (): ActionType<boolean> => ({
  type: LOGOUT_LOCAL,
  payload: false,
});

export const updateCaseFlag = (flag: any): ActionType => ({
  type: UPDATE_CASE_FLAG,
  payload: flag,
});

export const setUserInfo = (payload: any) => (dispatch: Dispatch<ActionType>) => {
  AsyncStorage.setItem('userInfo', JSON.stringify(payload))
    .then(() => {
      dispatch({
        type: SET_USER_INFO,
        payload: payload,
      });
    })
    .catch((error: Error) => {
      console.log(error);
      Alert.alert('Something went wrong, Please try again later!!');
    });
};
