import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Constantes'
import { moderateScale } from '../utils/Dimension'

const LogoApp = () => {
    return (
        <View className="w-full h-8 mb-5 flex-row">
            <View className="h-full justify-end">
                <Text className="text-white font-bold text-3xl">S</Text>
            </View>
            <View className="w-full h-full justify-end">
                <Text className="font-extrabold" style={{ color: Colors.SECONDARY, fontSize: moderateScale(25) }}>martmeal</Text>
            </View>
        </View>
    )
}

export default LogoApp