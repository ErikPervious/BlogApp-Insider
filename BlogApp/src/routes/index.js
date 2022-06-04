import React, { useContext } from "react";
import { ThemeProvider } from 'styled-components/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Search } from "../pages/Search";
import { CategoryPosts } from "../pages/categoryPosts";

import { ThemeContext } from "../contexts/useTheme";

import themes from '../themes';

const Stack = createNativeStackNavigator();

export function Routes() {

  const { theme } = useContext(ThemeContext);
  const isTheme = themes[theme] || theme.dark;

  return (
    <ThemeProvider theme={isTheme}>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#FFFFFF',
          headerStyle: {
            backgroundColor: '#232630'
          },
          gestureEnabled: true,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ headerTitle: 'Detalhes', animation: 'fade_from_bottom' }}
        />
          <Stack.Screen
            name="Category"
            component={CategoryPosts}
            options={{ animation: 'fade' }}
          />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerTitle: 'Procurando algo?', animation: 'slide_from_right' }}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
};