import styled from 'styled-components/native';

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
export const HeaderTitle = styled.Text`
  font-size: 28px;
  color: #FFFFFF;
  font-weight: bold;
`;
export const HeaderButtonSearch = styled.TouchableOpacity``;
export const List = styled.FlatList`
  max-height: 115px;
  background-color: #EFEFEF;
  margin: 0 18px;
  border-radius: 8px;
  z-index: 9;
`;
export const ContainerMain = styled.View`
  flex: 1;
  background-color: #FFFFFF;
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
  color: #162133;
  margin-left: 18px;
`;
export const ListPosts = styled.FlatList`
  flex: 1;
  padding: 0 18px;
`;