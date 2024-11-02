import React from 'react';
import { View, TextInput, TextInputProps, StyleSheet } from 'react-native';
import { moderateScale, textScale } from '../../../utils/responsiveSize';
import { Fonts } from '../../../utils/constant';
import color from '../../consts/color';


export interface InputTextProps {
  label?: string;
  textInputProps?: TextInputProps;
  height?: number;
  left?: React.ReactNode;
  right?: React.ReactNode;
  handleKeyPress?: () => void;
  borderWidth?: number;
  secureTextEntry?: boolean;
}

function InputText(props: InputTextProps) {
  const {
    right,
    left,
    handleKeyPress,
    // borderWidth = 1,
    textInputProps,
    label,
    secureTextEntry = false,
    height = moderateScale(50)
  } = props;

  return (
    <View style={[styles.container, { height, }]}>
      {left}
      <TextInput
        placeholder={textInputProps?.placeholder ?? ""}
        onSubmitEditing={handleKeyPress}
        returnKeyType="done"
        placeholderTextColor={'#B8BEC9'}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        {...textInputProps}
      />
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
    borderRadius:moderateScale(10)
  },
  input: {
    flex: 1,
    fontSize: textScale(14),
    color: color.black,
    fontFamily: Fonts.Regular,
    paddingLeft: moderateScale(15),
    lineHeight: textScale(24),
  }
});

export default InputText;