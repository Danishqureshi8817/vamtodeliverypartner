import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import color from "../consts/color";
import { fontFamily, fontSizes, spacingSizes } from "../consts/size";
import ConditionalRendering from "./ConditionalRendering";
import { WIDTH } from "../consts/config";

type AppHeaderPropTypes = {
  title?: string;
  contFlex?: number;
  titleStyles?: StyleProp<TextStyle>;
  titleDiscription?: StyleProp<TextStyle>;
  containerStyles?: StyleProp<ViewStyle>;
  description?: string;
  isFontWeight?: boolean;
  rightIcon?: boolean;
  leftIcon?: boolean;
};
export default function Heading(props: AppHeaderPropTypes) {
  const Navigation = useNavigation<any>();
  const {
    title,
    titleStyles,
    description,
    titleDiscription,
    containerStyles,
    isFontWeight,
    rightIcon = false,
    leftIcon = false,
  } = props;
  return (
    <View style={[styles.titleContainer, containerStyles]}>
      <View style={styles.textContainer}>
        <View style={styles.arrowContainer}>
          <ConditionalRendering
            condition={leftIcon ? true : false}
            positive={
              <TouchableOpacity
                onPress={() => {
                  Navigation.goBack();
                }}
              >
                <Ionicons
                  style={styles.icon}
                  name="arrow-back"
                  color={color.white}
                  size={fontSizes.mediumLarge}
                />
              </TouchableOpacity>
            }
            negative={null}
          />
        </View>
        <Text
          style={[
            isFontWeight ? styles.supportTextHigh : styles.supportTextContainer,
            titleStyles,
          ]}
        >
          {title}
        </Text>
        <ConditionalRendering
          condition={rightIcon ? true : false}
          positive={
            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => {
                  Navigation.navigate("Notification");
                }}
              >
                <AntDesign
                  style={styles.icon}
                  name="bells"
                  color={color.white}
                  size={fontSizes.mediumLarge}
                />
              </TouchableOpacity>
            </View>
          }
          negative={null}
        />
      </View>
      {description ? (
        <Text style={[styles.discriptionText, titleDiscription]}>
          {description}
        </Text>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  topMainContainer: {},
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'space-between',
  },
  supportTextContainer: {
    color: color.white,
    fontSize: fontSizes.medium,
    fontWeight: "600",
    lineHeight: 25,
    padding: spacingSizes.medium,
  },
  supportTextHigh: {
    color: color.black,
    fontSize: fontSizes.mediumLarge,
    marginTop: spacingSizes.large,
    fontWeight: "700",
    lineHeight: 25,
    fontFamily: fontFamily.bold,
  },
  titleContainer: {
    // backgroundColor: color.lightYellow,

    backgroundColor: color.blue,
    height: 120,
    borderBottomRightRadius:150,
    
  },
  discriptionText: {
    fontSize: fontSizes.tiny,
    fontWeight: "300",
    color: color.white,
    marginLeft: 50,
    marginTop: -10,
    marginBottom: 2,
  },
  icon: {
    marginHorizontal: spacingSizes.smallMedium,
    justifyContent: "center",
  },
  iconContainer: {
    flexDirection: "row",
    gap: spacingSizes.smallMedium,
  },
  arrowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: spacingSizes.medium,
  },
});
