import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppText from "./AppText";
import Calender from "./Calender";

const CardDetail = ({ month, data }) => {
  const navigation = useNavigation();

  return (
    <>
      <AppText style={styles.month}>{month}</AppText>
      <FlatList
        data={data}
        keyExtractor={(data, index) => index.toString()}
        renderItem={({ item }) => (
          <Calender
            {...item}
            onPress={() => navigation.navigate("Details", item)}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  month: {
    paddingLeft: 15,
    marginBottom: 5,
  },
});

export default CardDetail;
