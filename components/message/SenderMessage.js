import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const SenderMessage = ({ text }) => {
  return (
    <View
      style={[
        tw`bg-[#6FB3F1] rounded-3xl px-5 mx-3 my-2 rounded-br-md py-3`,
        {
          marginLeft: 'auto',
          alignSelf: 'flex-start',
        },
      ]}
    >
      <Text style={tw`text-white`}>{text}</Text>
    </View>
  );
};

export default SenderMessage;
