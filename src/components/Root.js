import 'react-native-gesture-handler';
import { AuthContext } from "../Context/AuthContext";
import HomeTabNavigator from "../Home/HomeTabNavigator";
import HomeStackNavigator from "../Home/HomeStackNavigator";
import React, { useEffect, useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import DetailPlatScreen from '../screens/afterAuth/DetailPlatScreen';
import { ActivityIndicator } from 'react-native';

const Stack = createStackNavigator();

export default function Root() {
  const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);
  const [checking, setIsChecking] = React.useState(true);
  const { getItem } = useAsyncStorage("@token");

  React.useEffect(() => {
    const checkIfUserIsLoggedIn = async () => {
      const item = await getItem();
      //user is logged in
      console.log(item);
      if (item !== null) {
        setIsLoggedIn(true);
      }
      setIsChecking(false);
    };
    checkIfUserIsLoggedIn();
  }, []);

  if (checking) return <ActivityIndicator />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Home'
      >
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={HomeTabNavigator}
          />
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeStackNavigator}
            />
            <Stack.Screen
              name="DetailPlat"
              component={DetailPlatScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}