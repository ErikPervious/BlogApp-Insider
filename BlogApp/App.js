import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/contexts/useTheme';

import { Routes } from './src/routes';

export default function App() {

  return (
    <View style={{ flex: 1, backgroundColor: "#232630" }}>
      <ThemeProvider>
        <NavigationContainer>
          <StatusBar backgroundColor="#232630" barStyle="light-content" />
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </View>
  );
};