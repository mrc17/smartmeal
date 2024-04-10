import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/Constantes'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View className="bg-black flex-1 h-full w-full">
      <View className="flex-row h-3/5 w-full">
        <View className="h-full w-full items-end">
          <Image className="flex-1" resizeMode="stretch" source={require('../../../assets/image/preview.png')} />
        </View>
      </View>
      <View className="flex-1 flex space-y-8 items-center w-full">
        <TouchableOpacity activeOpacity={0.7} className="w-4/5 items-center p-3 rounded-3xl" onPress={() => { navigation.navigate("Phone") }} style={{ backgroundColor: Colors.SECONDARY }}>
          <Text className="font-bold text-lg" style={{ color: Colors.DARK }}>Creer un compte</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} className="w-4/5 items-center border-2 p-3 rounded-3xl" onPress={() => { navigation.navigate("Onboarding") }} style={{ borderColor: Colors.SECONDARY, backgroundColor: Colors.NETRALE }}>
          <Text className="font-bold text-white text-lg">Connexion</Text>
        </TouchableOpacity>
        <View className="w-11/12 h-36  justify-center">
          <Text className="font-bold text-white text-center text-sm">Avec SmartMeal, on ne résout pas un problème avec les mêmes modes de pensée qui l'ont engendré.</Text>
          <Text className="pt-4 font-light text-center text-white text-sm">Propusé par Mr17</Text>
        </View>
      </View>
    </View>
  )
}

export default WelcomeScreen