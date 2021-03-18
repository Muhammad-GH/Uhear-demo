import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";

const ImageHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/logo_head.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.iconContainer}>
        <Ionicons
          style={styles.icon}
          name="ios-notifications-outline"
          size={24}
          color={colors.darkGrey}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 150,
  },
  icon: {
    left: 100,
  },
});

export default ImageHeader;
