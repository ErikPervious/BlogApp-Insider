import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { PostCard } from "../../components/PostCard";

import api from '../../services/api';

import { 
  Container, ContainerIsEmpty, ContainerLoading, EmptyButton, EmptyButtonText, EmptyText
 } from "./styled";
import { ListPosts } from "../Home/styled";
import { ActivityIndicator } from "react-native";

export function CategoryPosts() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);

  const { params } = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get(`api/categories/${params?.id}?fields=name&populate=posts,posts.cover`);
      setPosts(response.data?.data?.attributes?.posts?.data);
      setLoading(false);
    };
    loadPosts();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: params?.title ? params?.title : 'Categoria'
    })
  }, [navigation]);

  return (
    <Container>
      {loading && (
        <ContainerLoading>
          <ActivityIndicator size={35} color="#162133" />
        </ContainerLoading>
      )}
      {posts?.length === 0 && !loading ? (
        <ContainerIsEmpty>
          <EmptyText>Essa categoria não possui nenhum post.</EmptyText>
          <EmptyButton onPress={() => navigation.goBack()}>
            <EmptyButtonText>Encontrar posts</EmptyButtonText>
          </EmptyButton>
        </ContainerIsEmpty>
      ) : (
        <ListPosts
          data={posts}
          style={{paddingHorizontal: 18}}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <PostCard data={item} />}
        />
      )}
    </Container>
  )
}