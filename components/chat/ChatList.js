import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import { mock } from '../../mock/tinder-mock';
import ChatRow from './ChatRow';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../db/firebase-config';
import { useAuth } from '../../hook/useAuth';
const ChatList = () => {
  const [matches, setMatches] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    let unsub = onSnapshot(
      query(collection(db, 'matches'), where('userMatched', 'array-contains', user.uid)),
      (snapshot) => {
        setMatches(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    );
    return unsub;
  }, []);
  return (
    <FlatList
      style={tw`h-full`}
      data={matches}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatRow {...item} />}
    />
  );
};

export default ChatList;
