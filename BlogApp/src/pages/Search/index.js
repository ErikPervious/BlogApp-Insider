import React, { useState } from "react";
import { Keyboard } from "react-native";
import { Feather } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';

import { PostCard } from "../../components/PostCard";

import api from "../../services/api";

import { 
  ButtonSearch,
  Container, 
  ContainerInputSearch, 
  InputSearch,
  ResultIsEmptyTextAnimated
} from "./styled";
import { ListPosts } from "../Home/styled";

const ListPostsAnimated = Animatable.createAnimatableComponent(ListPosts);

export function Search() {
  const [inputValue, setInputValue] = useState('');
  const [posts, setPosts] = useState('');
  const [resultIsEmpty, setResultIsEmpty] = useState(false);

  async function handleSearchPost() {
    if(inputValue === '') return;

    const response = await api.get(`api/posts?filters[title][$containsi]=${inputValue}&populate=cover`);

    if(response.data?.data.length === 0) {
      setResultIsEmpty(true);
      setPosts([]);
      timeOut();
      return;
    };

    setResultIsEmpty(false);
    setPosts(response.data?.data);
    Keyboard.dismiss();
    setInputValue('');
  };
  
  function timeOut() {
    setTimeout(() => {
      setResultIsEmpty(false);
    }, 3000);
  };

  return (
    <Container
      onSubmitEditing={handleSearchPost}
    >
      <ContainerInputSearch>
        <InputSearch
          value={inputValue}
          onChangeText={value => setInputValue(value)}
          placeholder="O que está buscando?"
          selectionColor="#232630"
        />
        <ButtonSearch 
          onPress={handleSearchPost}
        >
          <Feather
            name="search"
            size={25}
            color="#232630"
          />
        </ButtonSearch>
      </ContainerInputSearch>
      {resultIsEmpty && (
        <ResultIsEmptyTextAnimated
          animation="wobble"
        >
          Ops... nada foi encontrado, tente novamente!
        </ResultIsEmptyTextAnimated>
      )}
      {posts.length !== 0 && ( 
        <ListPostsAnimated
          data={posts}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <PostCard data={item} />}
          animation="fadeInUp"
        />
      )}
    </Container>
  )
}