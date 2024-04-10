import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/afterAuth/HomeScreen";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../utils/Constantes";
import { moderateScale } from "../utils/Dimension";
import FavorieScreen from "../screens/afterAuth/FavorieScreen";

const Tab = createMaterialBottomTabNavigator();

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator
      inactiveColor={Colors.WHITE}
      activeColor={Colors.SECONDARY}
      shifting={false}
      barStyle={{
        backgroundColor: "#000",

      }}
    >
      {/* Screen for Find */}
      <Tab.Screen
        name="Favories"
        component={FavorieScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" color={color} size={moderateScale(30)} />
          ),
        }}
      />


      {/* Screen for Settings */}
      <Tab.Screen
        name="Acceuil"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={20} />
          ),
        }}
      />
      {/* Screen for Settings */}
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-plus" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
