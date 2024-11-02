import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { moderateScale, textScale } from '../../../utils/responsiveSize';
import { Fonts } from '../../../utils/constant';
import color from '../../consts/color';
import { BackIcon } from '../Icons';

type AppBarProps = {
  left?: React.ReactNode;
  back?: boolean;
  right?: React.ReactNode;
  title?: string;
  elevation?: number;
  onCustomBackPress?: () => void;
  whiteBack?: boolean;
  fontFamily?: string;
  backgroundColor?: string;
  textColor?: string;
};

export function AppBar(props: AppBarProps) {
  const {
    left,
    right,
    back,
    title,
    onCustomBackPress,
    fontFamily,
    backgroundColor = '#ffffff',
    textColor = '#000'
  } = props;

  const navigation = useNavigation()

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {back ? (
        <Pressable
          onPress={onCustomBackPress || navigation?.goBack}
          style={styles.leftContainer}>
          <BackIcon />
          {/* </Pressable> */}
        </Pressable>
      ) : (
        left
      )}
      <View style={[styles.titleContainer, { marginLeft: !back ? moderateScale(25) : 0 }]}>
        <Text style={[styles.titleText, { color: textColor, fontFamily: fontFamily || Fonts.Medium }]}>
          {title}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        {right}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: moderateScale(50),
  },
  leftContainer: {
    marginLeft: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  titleContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: textScale(18),
    lineHeight: textScale(20),
  },
  rightContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});