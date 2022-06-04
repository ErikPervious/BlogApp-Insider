import styled from 'styled-components/native';

import * as Animatable from 'react-native-animatable';

export const SafeArea = styled.View`
  flex: 1;
  background-color: #232630;
`;
export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 18px;
  margin-bottom: 24px;
`;
export const HeaderTitle = styled(Animatable.Text)`
  font-size: 28px;
  color: #FFFFFF;
  font-weight: bold;
`;
export const HeaderButtonsRight = styled.View`
  flex-direction: row;
`;
export const HeaderButton = styled.TouchableOpacity`
  margin-left: 5px;
`;
export const List = styled.FlatList`
  max-height: 115px;
  background-color: #EFEFEF;
  margin: 0 18px;
  border-radius: 8px;
  z-index: 9;
`;
export const ContainerMain = styled.View`
  flex: 1;
  background-color: ${p => p.theme.BACKGROUND};
  margin-top: -30px;
`;
export const ListFavCategory = styled.FlatList`
  margin-top: 50px;
  max-height: 100px;
  padding-left: 18px;
`;
export const HighContentText = styled.Text`
  font-size: 22px;
  padding: 10px 0;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${p => p.theme.HIGH_CONTENT};
  margin-left: 18px;
`;
export const ListPosts = styled.FlatList`
  flex: 1;
`;

export const ListAnimated = Animatable.createAnimatableComponent(List);
export const HeaderButtonsRightAnimated = Animatable.createAnimatableComponent(HeaderButtonsRight);
export const ContainerMainAnimated = Animatable.createAnimatableComponent(ContainerMain);