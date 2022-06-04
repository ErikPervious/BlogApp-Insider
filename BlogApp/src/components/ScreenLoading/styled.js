import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
  background-color: #232630;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.Text`
  color: #FFFFFF;
  font-size: 24px;
  margin-top: 10px;
`;

export const FeatherAnimated = Animatable.createAnimatableComponent(Feather);
export const ContainerAnimated = Animatable.createAnimatableComponent(Container);
export const TextAnimated = Animatable.createAnimatableComponent(Text);