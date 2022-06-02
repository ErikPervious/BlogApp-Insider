import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';

import { ScreenLoading } from '../../components/ScreenLoading';
import { CategoryItem } from '../../components/CategoryItem';
import { FavoritePost } from '../../components/FavoritePost';
import { PostCard } from '../../components/PostCard';

import { getFavorites, setFavorite } from '../../services/favorite';
import api from '../../services/api';

import { 
  ContainerHeader, 
  ContainerMain, 
  HeaderButtonSearch, 
  HeaderTitle, 
  HighContentText, 
  List,
  ListFavCategory, 
  ListPosts, 
  SafeArea,
  ListAnimated 
} from './styled';

export function Home() {
  const [categories, setCategories] = useState([]);
  const [favCategory, setFavCategory] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const navigation = useNavigation();

  async function handleFavorite(item) {
    const response = await setFavorite(item.id);

    setFavCategory(response);
  };

  async function getListPosts() {
    setIsRefreshing(true);

    const response = await api.get('api/posts?populate=cover&sort=createdAt:desc');
    setPosts(response.data.data);
    setIsRefreshing(false);
  };

  useEffect(() => {
    async function loadData() {
      const category = await api.get('/api/categories?populate=icon');
      await getListPosts();
      setCategories(category.data.data);
      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    async function favorite() {
      const response = await getFavorites();
      setFavCategory(response);
    };
    favorite();
  }, []);

  return (
    <SafeArea>
      <ContainerHeader>
        <HeaderTitle 
          animation="fadeInLeft" 
          useNativeDriver={true}
        >
          BlogApp
        </HeaderTitle>
        <HeaderButtonSearch
          onPress={() => navigation.navigate('Search')}
        >
          <Feather name="search" size={27} color="#FFFFFF" />
        </HeaderButtonSearch>
      </ContainerHeader>
      {loading
        ? (
          <ScreenLoading 
            iconName="database" 
            iconSize={80} 
            iconColor="#FFFFFF" 
            text="buscando dados..." 
          />
        ) : (<>
          <ListAnimated
            data={categories}
            key={item => String(item.id)}
            renderItem={({item}) => (
              <CategoryItem 
                data={item}
                favorite={() => handleFavorite(item)}
              />
            )}
            horizontal={true}
            contentContainerStyle={{ paddingRight: 12 }}
            showsHorizontalScrollIndicator={false}
            useNativeDriver={true}  
            animation="fadeIn"
            delay={500} 
            />
          <ContainerMain>
            {favCategory.length !== 0 && (
              <ListFavCategory
                data={favCategory}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => (
                  <FavoritePost data={item} />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingEnd: 20 }}
              />
            )}
            <HighContentText
              style={{ marginTop: favCategory.length > 0 ? 10 : 38 }}
            >
              Conteúdos em alta
            </HighContentText>
            <ListPosts
              data={posts}
              style={{paddingHorizontal: 18}}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => <PostCard data={item} />}
              onRefresh={getListPosts}
              refreshing={isRefreshing}
            />
          </ContainerMain>
        </>)
      }
    </SafeArea>
  );
};  