import { useNavigation } from "@react-navigation/native";
import React from "react";

import {
  CardCover,
  CardDescription,
  CardTitle,
  Container, 
  ContainerCardCover, 
  ContainerCardText
} from "./styled";

export function PostCard({data}) {

  const coverUrl = `http://192.168.15.6:1337${data?.attributes?.cover?.data?.attributes?.url}`;

  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('Detail', {id: data?.id});
  };

  return (
    <Container onPress={handleNavigate}>
      <ContainerCardCover>
        <CardCover
          source={{uri: coverUrl}}
        />
      </ContainerCardCover>
      <ContainerCardText>
        <CardTitle numberOfLines={2}>
          {data?.attributes?.title}
        </CardTitle>
        <CardDescription numberOfLines={2}>
          {data?.attributes?.description}
        </CardDescription>
      </ContainerCardText>
    </Container>
  )
}