import React from "react";
import { Feather } from '@expo/vector-icons';

import { Container, Text } from "./styled";

export function ScreenLoading({iconName, iconSize, iconColor, text}) {
  return (
    <Container>
      <Feather 
        name={iconName} 
        size={iconSize} 
        color={iconColor} 
      />
      <Text>{text}</Text>
    </Container>
  )
}