import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routes';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#232630" }}>
      <NavigationContainer>
        <StatusBar backgroundColor="#232630" barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    </View>
  );
};