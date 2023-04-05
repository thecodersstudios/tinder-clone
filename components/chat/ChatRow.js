import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hook/useAuth';
import { getMatchedUser } from '../../utils/common';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../db/firebase-config';
const ChatRow = ({ users, ...others }) => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('먼저 메세지를 보내보세요!');
  const { user: loggedInUser } = useAuth();

  useEffect(() => {
    let unsub = onSnapshot(
      query(
        collection(db, `matches/${others.id}/messages`),
        orderBy('createdAt', 'desc'),
        limit(1)
      ),
      (snapshot) => {
        setMessage(snapshot.docs[0]?.data()?.text ?? '먼저 메세지를 보내보세요!');
      }
    );
    return unsub;
  }, []);

  const matchedUser = getMatchedUser(users, loggedInUser.uid);
  return (
    <TouchableOpacity
      style={tw`flex-row items-center px-5 py-3 my-1 mx-3`}
      onPress={() => navigation.navigate('Message', { users, ...others })}
    >
      <Image style={tw`w-16 h-16 rounded-full mr-4`} source={{ uri: matchedUser?.photoURL }} />
      <View style={tw`flex-1 border-b border-gray-300 pb-4`}>
        <Text style={tw`text-lg font-semibold`}>{matchedUser?.displayName}</Text>
        <Text>{message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatRow;
