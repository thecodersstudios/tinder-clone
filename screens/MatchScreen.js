import { SafeAreaView, Text, Image, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import { mock } from '../mock/tinder-mock';
import { useNavigation, useRoute } from '@react-navigation/native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../db/firebase-config';
import { useAuth } from '../hook/useAuth';
const MatchScreen = () => {
  const navigation = useNavigation();
  const [loggedInUser, setLoggedInUser] = useState({});
  const { params } = useRoute();
  const { user } = useAuth();
  const { swipedUser } = params;
  useEffect(() => {
    const init = async () => {
      setLoggedInUser((await getDoc(doc(db, `users/${user.uid}`))).data());
    };
    init();
  }, []);
  return (
    <SafeAreaView style={[tw`h-full bg-red-500 pt-2`, { opacity: 0.9 }]}>
      <Image
        source={{ uri: mock.etc.matchedLogo }}
        style={[tw`w-full h-20`, { resizeMode: 'contain' }]}
      />
      <Text style={tw`text-center text-white mt-5`}>
        {swipedUser?.displayName}님과 매칭되셨습니다.
      </Text>
      <View style={tw`flex-row items-center justify-evenly mt-5`}>
        <Image style={tw`w-32 h-32 rounded-full`} source={{ uri: swipedUser.photoURL }} />
        <Image style={tw`w-32 h-32 rounded-full`} source={{ uri: loggedInUser.photoURL }} />
      </View>
      <TouchableOpacity
        style={tw`bg-white py-8 px-2 rounded-full m-5 mt-20`}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={tw`text-center`}>메세지 보내기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MatchScreen;
