import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  border-width: 1px;
  border-color: #EFEFEF;
  border-radius: 4px;
  margin-bottom: 14px;
  padding: 14px 12px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const ContainerCardCover = styled.View`
  margin-right: 10px;
`;
export const CardCover = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 9px;
`;
export const ContainerCardText = styled.View`
  flex: 1;
  width: 70%;
`;
export const CardTitle = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 4px;
`;
export const CardDescription = styled.Text`
  font-size: 12px;
  line-height: 16px;
`;