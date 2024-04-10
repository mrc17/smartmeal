import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '../../utils/Constantes'
import { View, SafeAreaView, Text, ScrollView, TouchableOpacity } from 'react-native'
import LogoApp from '../../components/LogoApp'
import { Fontisto } from 'react-native-vector-icons';

import SectionSearche from '../../components/SectionSearche'
import { moderateScale } from '../../utils/Dimension'


const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: Colors.PRIMARY }}>
      <View className="flex-1 p-5">
        <StatusBar style='light' />
        <LogoApp />
        <View className='w-full pb-5 h-auto'>
          <Text className="font-extrabold text-5xl py-2 text-white">Explorez</Text>
          <SectionSearche />
        </View>
        <ScrollView className="w-full flex-1">
          <View className='w-full flex-row px-3 space-x-3'>
            <View className='w-1/12 justify-center items-center  '>
              <Fontisto name="fire" color="#FF4901" size={moderateScale(35)} />
            </View>
            <View className='flex-1 py-4'>
              <Text className="font-bold text-3xl text-white">Plats du jour</Text>
            </View>
          </View>
          <View className='justify-center gap-2 flex-wrap flex-row'>
            <TouchableOpacity onPress={() => { navigation.navigate("Phone") }}  activeOpacity={0.7} className="w-5/12 bg-white rounded-lg h-56"></TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
