import React from 'react';
import { Feather } from '@expo/vector-icons';

import { ContainerHeader, HeaderButtonSearch, HeaderTitle, SafeArea } from './styled';

export default function Home() {
  return (
    <SafeArea>
      <ContainerHeader>
        <HeaderTitle>BlogApp</HeaderTitle>
        <HeaderButtonSearch>
          <Feather name="search" size={27} color="#FFFFFF" />
        </HeaderButtonSearch>
      </ContainerHeader>
    </SafeArea>
  );
};  