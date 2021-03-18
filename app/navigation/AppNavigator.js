import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="feed" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Apps"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore-o" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="clockcircleo" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
