import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, IconImage, IconName } from "./styled";

export function CategoryItem({data, favorite}) {

  const iconUrl = `http://192.168.15.6:1337${data?.attributes?.icon?.data?.attributes?.url}`;

  const navigation = useNavigation();

  const propsCategory = {
    id: data.id,
    title: data?.attributes.name
  }

  return (
    <Container
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Category', { propsCategory })}
      onLongPress={favorite}
    >
      <IconImage
        source={{uri: iconUrl}}
      />
      <IconName>{data.attributes.name}</IconName>
    </Container>
  );
};