import { SafeAreaView, Text } from 'react-native';
import Header from '../components/home/Header';
import Body from '../components/home/Body';
import tw from 'twrnc';
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <Header />
      <Body />
    </SafeAreaView>
  );
};

export default HomeScreen;
