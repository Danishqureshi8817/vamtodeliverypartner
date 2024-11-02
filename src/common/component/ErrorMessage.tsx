import React from "react";
import { Text, StyleSheet } from "react-native";
import color from "../consts/color";
import { fontSizes, spacingSizes } from "../consts/size";

type LabelProps = {
  error?: string;
};

export default function ErrorMessage(props: LabelProps) {
  const { error } = props;
  return <Text style={styles.label}>{error}</Text>;
}

const styles = StyleSheet.create({
  label: {
    marginVertical: spacingSizes.smallMedium,
    fontSize: fontSizes.small,
    fontWeight: "600",
    color:color.black,
  },
});
