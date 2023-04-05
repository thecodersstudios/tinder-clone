import {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/chat/Header';
import { mock } from '../mock/tinder-mock';
import tw from 'twrnc';
import SenderMessage from '../components/message/SenderMessage';
import ReciverMessage from '../components/message/ReciverMessage';
import Input from '../components/message/Input';
import { useAuth } from '../hook/useAuth';
import { useRoute } from '@react-navigation/native';
import { getMatchedUser } from '../utils/common';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../db/firebase-config';

// const user = mock.user;
const MessageScreen = () => {
  const { user } = useAuth();
  const { params: matchInfo } = useRoute();
  const [messages, setMessages] = useState([]);
  const matchedUser = getMatchedUser(matchInfo.users, user.uid);
  const sendMessage = async (text) => {
    await addDoc(collection(db, `matches/${matchInfo.id}/messages`), {
      text,
      createdAt: serverTimestamp(),
      uid: user.uid,
    });
  };

  useEffect(() => {
    let unsub = onSnapshot(
      query(collection(db, `matches/${matchInfo.id}/messages`), orderBy('createdAt', 'desc')),
      (snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    );
    return unsub;
  }, []);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Header callable title={matchedUser?.displayName} />
      <KeyboardAvoidingView
        style={tw`flex-1`}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={2}
      >
        <TouchableWithoutFeedback>
          <FlatList
            style={tw`flex-1 pl-4 w-full`}
            inverted
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
              item.uid === user.uid ? (
                <SenderMessage {...item} />
              ) : (
                <ReciverMessage {...item} photoURL={matchedUser.photoURL} />
              )
            }
          />
        </TouchableWithoutFeedback>
        <Input sendMessage={sendMessage} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MessageScreen;
