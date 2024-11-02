import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  StatusBarProps,
} from 'react-native';

export default (props: StatusBarProps) => {
  const {backgroundColor} = props;
  return (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} barStyle="dark-content" {...props} />
      </SafeAreaView>
    </View>
  );
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});
