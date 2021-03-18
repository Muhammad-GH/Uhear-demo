import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppText from "./AppText";
import CardDetail from "./CardDetail";

const Card = ({ year, monthly }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.headingText}>{year}</AppText>
      <View>
        <FlatList
          data={monthly}
          keyExtractor={(data, index) => index.toString()}
          renderItem={({ item }) => <CardDetail {...item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    textAlign: "center",
  },
});

export default Card;
