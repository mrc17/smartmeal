import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, Vibration } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { Colors } from '../../utils/Constantes';


const LandingScreen = ({ navigation }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const backgroundColor = useRef(new Animated.Value(0)).current;
  const flashOpacity = useRef(new Animated.Value(0)).current;

  const VibrationApresAnimation = () => {
    setTimeout(() => {
      Vibration.vibrate()
      navigation.dispatch(StackActions.replace("Welcome"));
    }, 2000)
  }

  useEffect(() => {
    const opacityAnimation = Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    });

    const backgroundColorAnimation = Animated.timing(backgroundColor, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    });

    const flashingAnimation = Animated.sequence([
      Animated.delay(1000),
      Animated.loop(
        Animated.sequence([
          Animated.timing(flashOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false,
          }),
          Animated.timing(flashOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false,
          }),
        ]),
        { iterations: 2 }
      ),
    ]);

    VibrationApresAnimation();

    Animated.parallel([opacityAnimation, backgroundColorAnimation, flashingAnimation]).start();
  }, [opacity, backgroundColor, flashOpacity]);

  return (
    <View className="flex-1 items-center flex-row justify-center bg-black">
      <Animated.View className="h-1/6 w-75 self-center flex flex-row justify-self-center items-center"
        style={[
          {
            opacity,
            backgroundColor: backgroundColor.interpolate({
              inputRange: [0, 1],
              outputRange: ['rgba(255, 158, 29, 0)', 'rgba(255, 158, 29, 0)'],
            }),
          },
        ]}
      >
        <Text className="text-white text-9xl font-bold">S</Text>
      </Animated.View>
      <View className="justify-end h-20">
        <Animated.Text className="text-5xl font-bold" style={{ opacity: flashOpacity, color: Colors.SECONDARY }}>
          martmeal
        </Animated.Text>
      </View>
    </View>
  );
};

export default LandingScreen;
