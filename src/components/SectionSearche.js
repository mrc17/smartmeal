import { View,TextInput } from 'react-native'
import React from 'react'
import { moderateScale } from '../utils/Dimension'
import { Colors } from '../utils/Constantes'
import { FontAwesome } from 'react-native-vector-icons';
const SectionSearche = () => {
    return (
        <View className='w-full py-2 h-auto flex-row border-b-2' style={{ borderBottomColor: Colors.WHITE }}>
            <View className="w-11/12">
                <TextInput placeholderTextColor={Colors.WHITE} className="font-semibold w-full text-white text-lg" placeholder='Rechercher un plat particulier' />
            </View>
            <View className="w-1/12 items-center">
                <FontAwesome name="search" color={Colors.WHITE} size={moderateScale(30)} />
            </View>
        </View>
    )
}

export default SectionSearche