import { AuthContext } from '../../Context/AuthContext';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, { useMemo, useRef, useState } from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, Vibration } from 'react-native';
import { Colors } from '../../utils/Constantes';
import Loader from '../../components/Loading';


const LoginScreen = ({ navigation }) => {
  const { setIsLoggedIn } = React.useContext(AuthContext);
  const { setItem } = useAsyncStorage('@token');
  const [isError, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [isLoader, setIsLoader] = useState(false);



  const logInUser = async () => {
    try {
      // Réglez isLoggedIn à true (simulant une connexion réussie)
      setIsLoggedIn(true);

      // Stockez le token dans AsyncStorage en utilisant une clé et une valeur
      await setItem('token');

    } catch (error) {
    }
  };

  const GetLogin = () => {
    setIsLoader(true)
    setTimeout(() => {
      setIsLoader(false)
      logInUser()
      Vibration.vibrate()

      Vibration.vibrate()
    }, 2000);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? '' : 'height'}
      className="flex-1">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="bg-black p-2 flex-1 h-full items-center w-full">
          <View className="flex-row h-28 w-full justify-center items-end">
            <View className="flex-row items-end justify-end w-full">
              <Text className="font-bold text-white text-5xl">U</Text>
              <Text className="font-bold text-white text-2xl" style={{ color: Colors.SECONDARY }}>bite</Text>
            </View>
          </View>
          <View className="justify-start w-5/6">
            <Text className="font-bold text-white text-3xl">Bonjour !</Text>
            <Text className="font-bold text-white text-5xl" style={{ color: Colors.SECONDARY }}>Bienvenue</Text>
            <Text className="font-normal text-white text-base" style={{ color: Colors.GRAY }}>Nous vous attendons, veuillez entrer vos coordonnées</Text>
          </View>
          <View className="h-96 justify-center gap-5 w-5/6">
            <View className="h-9 pl-2 w-full border-b-2" style={{ borderBottomColor: Colors.SECONDARY }}>
              <TextInput placeholder='Speudo ou Télephone' className="h-full w-full" placeholderTextColor={Colors.GRAY} style={{ color: Colors.GRAY }} />
            </View>
            <View className="h-9 pl-2 w-full border-b-2" style={{ borderBottomColor: Colors.SECONDARY }}>
              <TextInput secureTextEntry={true} placeholder='Mot de passe' className="h-full w-full" placeholderTextColor={Colors.GRAY} style={{ color: Colors.GRAY }} />
            </View>
            <View className="flex-row w-full justify-center items-end">
              <TouchableOpacity activeOpacity={0.7} className="flex-row items-end justify-end w-full">
                <Text className="font-normal text-white text-base" style={{ color: Colors.GRAY }}>Mot de passe Oublié ?</Text>
              </TouchableOpacity>
            </View>
            <View className="w-full justify-center">
              <TouchableOpacity onPress={GetLogin} className="w-full h-12 justify-center items-center" style={{ backgroundColor: Colors.SECONDARY }} activeOpacity={0.7}>
                {
                  isLoader ? <Loader /> : <Text className="font-bold text-lg" style={{ color: Colors.DARK }}>CONNEXION</Text>
                }
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
}

export default LoginScreen;

