import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '../../utils/Constantes'
import { View, SafeAreaView, Text, ScrollView} from 'react-native'
import LogoApp from '../../components/LogoApp'
import { Fontisto } from 'react-native-vector-icons';

import { moderateScale } from '../../utils/Dimension'

const FavorieScreen = () => {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: Colors.PRIMARY }}>
      <View className="flex-1 p-5">
        <StatusBar style='light' />
        <LogoApp />
        <View className='w-full flex-row px-3 space-x-3'>
          <View className='w-2/12 justify-center items-center  '>
            <Fontisto name="heart" color={Colors.RED} size={moderateScale(35)} />
          </View>
          <View className='flex-1 py-4'>
            <Text className="font-bold text-4xl text-white">Favories</Text>
          </View>
        </View>
        <ScrollView className="w-full flex-1">
          <View className='justify-center space-y-4 px-2'>
            <View className="w-full bg-white rounded-2xl h-56"></View>
            <View className="w-full bg-white rounded-2xl h-56"></View>
            <View className="w-full bg-white rounded-2xl h-56"></View>
            <View className="w-full bg-white rounded-2xl h-56"></View>
            <View className="w-full bg-white rounded-2xl h-56"></View>
            <View className="w-full bg-white rounded-2xl h-56"></View>

          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}


export default FavorieScreen