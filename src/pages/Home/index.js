import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  return (
    <View>
      <Text>Hello World</Text>
      <Button title="ir" onPress={() => navigation.navigate('Detail')}/>
    </View>
  );
};  