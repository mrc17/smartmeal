import React from 'react';
import { View, Animated, Easing } from 'react-native';
import { Colors } from '../utils/Constantes';

const Loader = () => {
    const scrollX = new Animated.Value(0);

    Animated.loop(
        Animated.timing(scrollX, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        })
    ).start();

    const animLoaderStyle = {
        transform: [
            {
                translateX: scrollX.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-48, 48],
                }),
            },
        ],
    };

    return (
        <View className='w-7 h-7 rounded-full overflow-hidden relative'>
            <Animated.View className='w-14 h-14 rounded-2xl' style={[{ backgroundColor: Colors.DARK }, animLoaderStyle]} />
        </View>
    );
};

export default Loader;
