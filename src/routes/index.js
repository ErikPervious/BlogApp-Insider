import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Search } from "../pages/Search";
import { CategoryPosts } from "../pages/categoryPosts";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#FFFFFF',
          headerStyle: {
            backgroundColor: '#232630'
          }
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
        options={{ headerTitle: 'Detalhes' }}
      />
        <Stack.Screen
          name="Category"
          component={CategoryPosts}
        />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerTitle: 'Procurando algo?' }}
      />
    </Stack.Navigator>
  );
};