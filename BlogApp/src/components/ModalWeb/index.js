import React, { useState } from "react";
import { Feather } from '@expo/vector-icons';

import { WebView } from 'react-native-webview';

import { 
  Header, 
  HeaderTitle, 
  ButtonIcon 
} from "./styled";

export function ModalWeb({title, onClose, link}) {
  const [forceDark, setForceDark] = useState(false);

  return (
    <>
      <Header>
        <ButtonIcon onPress={onClose}>
          <Feather name="x" size={25} color="#FFFFFF" />
        </ButtonIcon>
        <HeaderTitle>{title}</HeaderTitle>
        <ButtonIcon onPress={() => setForceDark(!forceDark)}>
          <Feather 
            name={forceDark ? 'sun' : "moon"} 
            size={24} 
            color="#FFFFFF" 
          />
        </ButtonIcon>
      </Header>
      <WebView
        source={{ uri: link }}
        forceDarkOn={forceDark}
      />
    </>
  )
};