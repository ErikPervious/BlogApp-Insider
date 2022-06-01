import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
  flex: 1;
  margin-right: 8px;
`;
export const CoverBackground = styled.ImageBackground`
  border-radius: 8px;
  width: ${width - 60}px;
  height: 100px;
  justify-content: flex-end;
  background-color: #232530;
`;
export const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #FFFFFF;
  padding: 8px 12px;
`;