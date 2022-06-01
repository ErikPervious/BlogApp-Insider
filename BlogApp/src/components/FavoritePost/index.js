import { useNavigation } from "@react-navigation/native";
import React from "react";

import { 
  Container, 
  CoverBackground, 
  PostTitle
} from "./styled";

export function FavoritePost({data}) {

  const navigation = useNavigation(); 

  const coverUrl = `http://192.168.15.6:1337${data?.attributes?.cover?.data?.attributes?.url}`;

  function handleNavigate() {
    navigation.navigate('Detail', { id: data.id });
  };

  return (
    <Container onPress={handleNavigate}>
      <CoverBackground
        source={{uri: coverUrl}}
        resizeMode="cover"
        blueRadius={3}
        imageStyle={{borderRadius: 6, opacity: 0.7}}
      >
        <PostTitle numberOfLines={1}>
          {data?.attributes?.title}
        </PostTitle>
      </CoverBackground>
    </Container>
  )
}