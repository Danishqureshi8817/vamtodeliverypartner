import React, { FC } from 'react';
import { TouchableOpacity, Text, ActivityIndicator, ViewStyle, StyleSheet } from 'react-native';
import { Fonts } from '../../../utils/constant';
import { moderateScale } from '../../../utils/responsiveSize';
import color from '../../consts/color';

export type ButtonProps = {
  onPress?: () => void;
  buttonText: string;
  disabled?: boolean;
  loading?: boolean;
  fontSize?: number;
  textColor?: string;
  loaderColor?: string;
} & ViewStyle & { style?: ViewStyle };

const PrimaryButton: FC<ButtonProps> = ((props, ref) => {
  const {
    onPress,
    buttonText,
    disabled = false,
    loaderColor = 'white',
    loading = false,
    fontSize = 16,
    textColor = "white",
    style,
    ...styleProps
  } = props;

  return (
    <TouchableOpacity
      // ref={ref}
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        { backgroundColor: disabled ? 'gray' : color.primary },
        style,
        styleProps
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          { fontSize, color: textColor }
        ]}
        numberOfLines={1}
      >
        {buttonText}
      </Text>
      {loading && <ActivityIndicator color={loaderColor} size="small" style={styles.spinner} />}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    borderRadius: moderateScale(6),
    height: moderateScale(56),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(15),
  },
  buttonText: {
    fontFamily: Fonts.SemiBold,
    textAlign: 'center',

  },
  spinner: {
    marginLeft: 8,
  }
});

export default PrimaryButton;