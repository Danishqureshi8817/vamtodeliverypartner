import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicatorProps,
  View,
} from 'react-native';
import color from '../consts/color';
import {fontFamily, fontSizes, spacingSizes} from '../consts/size';
import {WIDTH} from '../consts/config';

type ButtonProps = {
  title?: string;
  containerStyles?: any;
  onPress?: () => void;
  transparent?: boolean;
  textStyles?: any;
  isLoading?: boolean;
  activityProps?: ActivityIndicatorProps;
  disabled?: boolean;
};
export default function Button(props: ButtonProps) {
  const {
    title,
    containerStyles,
    onPress,
    transparent,
    textStyles,
    isLoading,
    activityProps,
    disabled,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.mainContainer, containerStyles]}
      onPress={() => {
        if (!isLoading && onPress && !disabled) {
          onPress();
        }
      }}
      activeOpacity={disabled ? 1 : 0.4}>
      <View style={styles.gradient}>
        <Text
          style={[
            styles.title,
            {
              color: disabled
                ? color.black
                : transparent
                ? color.black
                : color.white,
            },
            textStyles,
            transparent ? styles.titleUnderline : null,
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
  title: {
    color: color.white,
    fontWeight: '600',
    fontSize: fontSizes.normal,
    textAlign: 'center',
    paddingVertical: 6,
    fontFamily: fontFamily.regular,
    lineHeight: spacingSizes.mediumLarge,
  },
  titleUnderline: {
    textDecorationLine: 'underline',
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: spacingSizes.mediumLarge,
    paddingVertical: 10,
    width: WIDTH / 1.2,
    padding: spacingSizes.mediumLarge,
    backgroundColor: color.red,
  },
});
