import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext('');

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  async function handleTheme() {
    const isNewTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(isNewTheme);
    await AsyncStorage.setItem('theme', isNewTheme);
  };

  useEffect(() => {
    async function getTheme() {
      const response = await AsyncStorage.getItem('theme');
      if (response == null) {
        return;
      };
      setTheme(response);
    };
    getTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }} >
      { children }
    </ThemeContext.Provider>
  );
}