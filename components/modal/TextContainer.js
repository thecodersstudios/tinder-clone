import { View, Text, TextInput } from 'react-native';
import React from 'react';
import tw from 'twrnc';
const TextContainer = ({ title, placeholder, setText, text, ...others }) => {
  return (
    <View>
      <Text style={tw`text-center p-4 font-bold text-red-400`}>{title}</Text>
      <TextInput
        value={text}
        style={tw`text-center pb-2`}
        placeholder={placeholder}
        onChangeText={setText}
        {...others}
      />
    </View>
  );
};

export default TextContainer;
