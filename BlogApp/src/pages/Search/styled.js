import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #FFFFFF;
  padding: 18px;
`;
export const ContainerInputSearch = styled.View`
  width: 100%;
  height: 45px;
  background-color: #C4C4C4;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 4px;
`;
export const InputSearch = styled.TextInput`
  flex: 1;
  height: 45px;
  padding: 8px;
  font-size: 16px;
  color: #232630;
`;
export const ButtonSearch = styled.TouchableOpacity`
  width: 15%;
  height: 45px;
  align-items: center;
  justify-content: center;
`;
export const ContainerResultIsEmpty = styled.View``;
export const ResultIsEmptyText = styled.Text`
  font-size: 14px;
  color: #23263090;
  text-align: center;
  font-weight: 500;
`;