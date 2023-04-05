import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { mock } from '../../mock/tinder-mock';
const ReciverMessage = ({ text, photoURL }) => {
  return (
    <View
      style={[
        tw`bg-[#EAEBEE] rounded-3xl px-5 mx-3 my-2 rounded-bl-md py-3 ml-14`,
        {
          marginRight: 'auto',
          alignSelf: 'flex-start',
        },
      ]}
    >
      <Image
        source={{ uri: photoURL }}
        style={tw`h-12 w-12 rounded-full absolute top-0 -left-14`}
      />
      <Text>{text}</Text>
    </View>
  );
};

export default ReciverMessage;
