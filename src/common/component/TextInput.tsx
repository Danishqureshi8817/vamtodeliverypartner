import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import color from '../consts/color';
import colors from '../consts/color';
import {fontFamily, fontSizes, spacingSizes} from '../consts/size';
import ConditionalRendering from './ConditionalRendering';
import ErrorMessage from './ErrorMessage';
import InputLabel from './InputLabel';
import { Fonts } from '../../utils/constant';
import { moderateScale, textScale } from '../../utils/responsiveSize';

type InputProps = {
  label?: string;
  error?: string;
  inputProps?: TextInputProps;
  name?: string;
  leftIcon?: string;
  containerStyles?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
  value?: string;
  inputStyle?: StyleProp<TextStyle>;
  placeholder?: string;  // Add placeholder to props
};

export default function Input(props: InputProps) {
  const {
    label,
    inputProps,
    containerStyles,
    onChangeText,
    value,
    inputStyle,
    error,
  } = props;
  
  return (
    <View style={[styles.container, containerStyles]}>
   { !!label &&  <InputLabel 
        labelStyles={error ? styles.labelError : null}
        label={label}
      />}
      <View style={[error ? styles.textInputError : styles.inputContainer]}>
        <TextInput
          style={[styles.textInput, inputStyle]}
          placeholderTextColor={color.grey}
          value={value}
          onChangeText={onChangeText}
          placeholder={props.placeholder} // Directly use the placeholder prop
          {...inputProps}
        />
      </View>
      <ConditionalRendering
        condition={error ? true : false}
        positive={<ErrorMessage error={error} />}
        negative={null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: spacingSizes.large,
  },
  textInput: {
    paddingHorizontal: spacingSizes.medium,
    paddingVertical: spacingSizes.medium,
    width: '100%',
    height: moderateScale(50),
    color: colors.black,
    borderRadius: spacingSizes.smallMedium,
    fontFamily:Fonts.Regular,
    fontSize:textScale(14)
  },
  textInputError: {
    flexDirection: 'row',
    borderWidth: 2,
    // borderColor: colors.black,
  },
  label: {
    // marginBottom: spacingSizes.smallMedium,
    fontSize: fontSizes.tiny,
    fontFamily: fontFamily.regular,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: colors.black,
    borderRadius: spacingSizes.smallMedium,
  },
  labelError: {
    color: colors.black,
  },
});
