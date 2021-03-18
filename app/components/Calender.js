import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const Calender = ({ date, title, type, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <AppText style={styles.date}>{date}</AppText>
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.result}>
            Result: <AppText style={styles.type}>{type}</AppText>
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 10,
    padding: 20,
    overflow: "hidden",
    elevation: 5,
  },
  date: {
    color: colors.black,
    fontSize: 30,
    width: "20%",
    top: 5,
  },
  result: {
    fontSize: 15,
  },
  type: {
    color: colors.primary,
    fontSize: 15,
  },
  title: {
    color: colors.black,
    fontSize: 22,
  },
});

export default Calender;
