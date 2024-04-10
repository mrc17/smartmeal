import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from "../screens/Landing/LandingScreen";
import OnboardingScreen from "../screens/Landing/OnboardingScreen";
import WelcomeScreen from './../screens/Landing/WelcomeScreen';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Landing" component={LandingScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Welcome" component={ WelcomeScreen}/>
        </Stack.Navigator>
    );
}
