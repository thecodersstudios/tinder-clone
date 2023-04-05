import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { mock } from '../../mock/tinder-mock';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hook/useAuth';
const Header = () => {
  const navigation = useNavigation();
  const { logout, user } = useAuth();
  return (
    <View style={tw`flex-row justify-between items-center px-5`}>
      <TouchableOpacity onPress={logout}>
        <Image style={tw`h-10 w-10 rounded-full`} source={{ uri: user.photoURL }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
        <Image
          source={{ uri: mock.etc.logo }}
          style={[tw`w-14 h-14 rounded-full`, { resizeMode: 'contain' }]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Ionicons name="chatbubbles-sharp" size={30} color="#ff6864" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
