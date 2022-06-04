import React from "react";

import { 
  ContainerAnimated,
  FeatherAnimated,
  TextAnimated
} from "./styled";

export function ScreenLoading({iconName, iconSize, iconColor, text}) {

  const fadeIn = {
    from: {
      opacity: 0.3,
    },
    to: {
      opacity: 1,
    },
  };

  return (
    <ContainerAnimated
      animation={fadeIn}
      iterationCount={1}
    >
      <FeatherAnimated
        name={iconName} 
        size={iconSize} 
        color={iconColor} 
        animation={fadeIn}
        iterationCount="infinite"
        direction="alternate"
      />
      <TextAnimated
        animation={fadeIn}
        iterationCount={1}
      >
        {text}
      </TextAnimated>
    </ContainerAnimated>
  )
}