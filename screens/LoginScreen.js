import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { mock } from '../mock/tinder-mock';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hook/useAuth';

const LoginScreen = () => {
  const navigation = useNavigation();
  const { handleLogin } = useAuth();
  // const handleLogin = () => {
  //   navigation.navigate('Home');
  // };
  return (
    <View style={tw`flex-1`}>
      <ImageBackground style={tw`flex-1`} source={{ uri: mock.etc.loginBg }}>
        <TouchableOpacity
          onPress={handleLogin}
          style={[
            tw`absolute bottom-40 w-50 bg-white rounded-xl p-4`,
            {
              marginHorizontal: '25%',
            },
          ]}
        >
          <Text style={tw`text-center`}>로그인 & 스와이핑</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
