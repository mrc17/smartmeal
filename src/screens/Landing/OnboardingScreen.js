import React from 'react';
import { AuthContext } from '../../Context/AuthContext';
import {Text, TouchableOpacity, View } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const OnboardingScreen = () => {
  const { setIsLoggedIn } = React.useContext(AuthContext);
  const { setItem } = useAsyncStorage('@token');

  const logInUser = async () => {
    try {
      // Réglez isLoggedIn à true (simulant une connexion réussie)
      setIsLoggedIn(true);

      // Stockez le token dans AsyncStorage en utilisant une clé et une valeur
      await setItem('token');

    } catch (error) {
    }
  };
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text>Onboarding Screen</Text>
      <TouchableOpacity onPress={logInUser}>
        <Text className="text-center text-xl font-bold text-white">Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;
