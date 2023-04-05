import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';

const Input = ({ sendMessage }) => {
  const [text, setText] = useState('');
  const handleSend = async () => {
    if (text === '') return alert('메세지를 입력하세요');
    await sendMessage(text);
    setText('');
    console.log('메세지 전송 완료');
  };
  return (
    <View
      style={tw`w-full flex-row items-center justify-between border-t border-gray-200 px-5 py-2`}
    >
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="메세지를 입력하세요"
        style={tw`flex-1 h-10 text-lg`}
      />
      <Button title="보내기" color="#FF5864" onPress={handleSend} />
    </View>
  );
};

export default Input;
