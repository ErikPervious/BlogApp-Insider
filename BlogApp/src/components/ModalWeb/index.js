import React from "react";
import { Feather } from '@expo/vector-icons';

import { WebView } from 'react-native-webview';

import { Header, HeaderTitle } from "./styled";

export function ModalWeb({title, onClose, link}) {
  return (
    <>
      <Header onPress={onClose}>
        <Feather name="x" size={25} color="#FFFFFF" />
        <HeaderTitle>{title}</HeaderTitle>
      </Header>
      <WebView
        source={{ uri: link }}
      />
    </>
  )
};