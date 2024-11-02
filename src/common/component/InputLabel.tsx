import React from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import colors from '../consts/color';
import {fontFamily, fontSizes, spacingSizes} from '../consts/size';
import { Fonts } from '../../utils/constant';
import { textScale } from '../../utils/responsiveSize';

type LabelProps = {
  label?: string;
  labelStyles?: StyleProp<TextStyle>;
};

export default function InputLabel(props: LabelProps) {
  const {label, labelStyles} = props;
  return <Text style={[styles.label, labelStyles]}>{label}</Text>;
}

const styles = StyleSheet.create({
  label: {
    // marginBottom: spacingSizes.smallMedium,
    marginTop:spacingSizes.small,
    fontSize: textScale(14),
    fontFamily: Fonts.Regular,
    color: colors.black,
    marginBottom:spacingSizes.small
  },
});
