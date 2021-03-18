import React from "react";
import { StyleSheet, FlatList, TouchableHighlight, View } from "react-native";
import { useTranslation } from "react-i18next";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import useMock from "../hooks/useMock";
import AppText from "../components/AppText";

const HomeScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  const { mock, seti18 } = useMock({ t, i18n });

  const changeLng = (lng) => {
    i18n.changeLanguage(lng);
    seti18(lng);
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={() => changeLng("en")}
          style={[
            styles.button,
            i18n.languages[0] == "en" ? styles.selected : null,
          ]}
        >
          <AppText style={styles.buttonText}>EN</AppText>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => changeLng("nl")}
          style={[
            styles.button,
            i18n.languages[0] == "nl" ? styles.selected : null,
          ]}
        >
          <AppText style={styles.buttonText}>NL</AppText>
        </TouchableHighlight>
      </View>

      <FlatList
        data={mock}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => <Card {...item} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.grey,
  },
  buttonContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  button: {
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
    width: "25%",
  },
  buttonText: {
    color: colors.primary,
    textAlign: "center",
  },
  selected: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});

export default HomeScreen;
