import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Custom imports
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

// locales
import i18n from "./app/locales";
const initI18n = i18n;

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
