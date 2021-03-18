import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";

const DetailsScreen = ({ route }) => {
  let { date, title, type } = route.params;

  return (
    <View>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Date: {date}</AppText>
        <AppText style={styles.price}>Title: {title}</AppText>
        <AppText style={styles.type}>Type: {type}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default DetailsScreen;
