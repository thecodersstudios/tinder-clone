import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Ionicons, Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Header = ({ callable, title }) => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-row items-center justify-between px-2 mb-6`}>
      <View style={tw`flex-row items-center justify-center`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={34} color="#FF5864" />
        </TouchableOpacity>
        <Text style={tw`text-2xl font-bold pl-2`}>{title}</Text>
      </View>
      {callable && (
        <View>
          <TouchableOpacity style={tw`bg-red-200 rounded-full p-3 mr-4`}>
            <Foundation name="telephone" size={20} color="#FF5864" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
