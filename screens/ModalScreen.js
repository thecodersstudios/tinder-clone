import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import tw from 'twrnc';
import { mock } from '../mock/tinder-mock';
import TextContainer from '../components/modal/TextContainer';
import { useNavigation } from '@react-navigation/native';
import { db } from '../db/firebase-config';
import { useAuth } from '../hook/useAuth';
const ModalScreen = () => {
  const [profileConfig, setProfileConfig] = useState({
    photoURL: '',
    job: '',
    age: '',
  });
  const { user } = useAuth();
  const onChange = (text, key) => {
    setProfileConfig({ ...profileConfig, [key]: text });
  };

  const isComplete = Object.values(profileConfig).every((value) => value !== '');
  //   profileConfig.age !== '' && profileConfig.job !== '' && profileConfig.photoURL !== '';
  const navigation = useNavigation();

  const updateProfile = async () => {
    try {
      await setDoc(doc(db, 'users', user?.uid), {
        ...profileConfig,
        displayName: "The Coder's Studios",
        timestamp: serverTimestamp(),
        id: user.uid,
      });
      navigation.navigate('Home');
    } catch (error) {
      console.error(error.message ?? error);
    }
  };

  const onSubmit = async () => {
    if (!isComplete) return;
    await updateProfile();
  };

  return (
    <View style={tw`flex-1 items-center pt-1`}>
      <Image
        style={[tw`w-full h-20`, { resizeMode: 'contain' }]}
        source={{ uri: mock.assets.modalLogo }}
      />
      <Text style={tw`text-xl text-gray-500 p-2 font-bold`}>Welcome {mock.user.displayName}</Text>
      <TextContainer
        title="Step 1: 프로필 사진"
        placeholder="프로필 url을 입력해주세요"
        text={profileConfig.photoURL}
        setText={(text) => onChange(text, 'photoURL')}
      />
      <TextContainer
        title="Step 2: 직업"
        placeholder="직업을 입력해주세요"
        text={profileConfig.job}
        setText={(text) => onChange(text, 'job')}
      />
      <TextContainer
        title="Step 3: 나이"
        placeholder="나이를 입력해주세요"
        text={profileConfig.age}
        setText={(text) => onChange(text, 'age')}
        maxLength={2}
        keyboardType="numeric"
      />
      <View style={tw`mt-10`}>
        <TouchableOpacity
          style={tw`w-64 p-3 rounded-xl ${isComplete ? 'bg-red-400' : 'bg-gray-400'} `}
          onPress={onSubmit}
        >
          <Text style={tw`text-center text-white text-xl`}>프로필 업데이트</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalScreen;
