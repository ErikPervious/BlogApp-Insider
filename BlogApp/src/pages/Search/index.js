import React, { useState } from "react";
import { Feather } from '@expo/vector-icons';

import api from "../../services/api";

import { PostCard } from "../../components/PostCard";

import { 
  ButtonSearch,
  Container, 
  ContainerInputSearch, 
  InputSearch, 
  ResultIsEmptyText
} from "./styled";
import { ListPosts } from "../Home/styled";
import { Keyboard, KeyboardAvoidingView } from "react-native";

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
    <Container>
      <ContainerInputSearch>
        <InputSearch
          value={inputValue}
          onChangeText={value => setInputValue(value)}
          placeholder="O que está buscando?"
          selectionColor="#232630"
        />
        <ButtonSearch onPress={handleSearchPost}>
          <Feather
            name="search"
            size={25}
            color="#232630"
          />
        </ButtonSearch>
      </ContainerInputSearch>
      {resultIsEmpty && (
        <ResultIsEmptyText>Ops... nada foi encontrado, tente novamente!</ResultIsEmptyText>
      )}
      <ListPosts
        data={posts}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <PostCard data={item} />}
      />
    </Container>
  )
}