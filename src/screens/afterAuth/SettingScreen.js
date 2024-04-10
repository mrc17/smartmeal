import { View, Text, Button } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/Constantes'
import { AuthContext } from "../../Context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingScreen = () => {
  const { setIsLoggedIn } = React.useContext(AuthContext);
  const logout = async () => {
    await AsyncStorage.removeItem("@token");
    await setIsLoggedIn(false);
  };
  return (
    <View className="flex-1 items-center justify-center bg-black" style={{ backgroundColor: Colors.DARK }}>
      <Text>SettingScreen</Text>
      <Button onPress={logout} title="LOGOUT" />

    </View>
  )
}

export default SettingScreen