import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api';

const keyFavCategory = "@favCategory";

// Search favorites;
async function getFavorites() {
  const data = await AsyncStorage.getItem(keyFavCategory);
  if(data !== null) {
    const response = await api.get(`api/categories/${data}?fields=name&populate=posts,posts.cover`);
    return response.data?.data?.attributes?.posts?.data;
  } else {
    return [];
  }
};

// Set new favorite;
async function setFavorite(category) {
  await AsyncStorage.setItem(keyFavCategory, String(category));

  const response = await getFavorites();
  return response;
};

export { getFavorites,  setFavorite };