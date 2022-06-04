import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${p => p.theme.BACKGROUND_CATEGORY};
  margin: 8px 0;
  margin-left: 8px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;
export const IconImage = styled.Image`
  width: 40px;
  height: 40px;
`;
export const IconName = styled.Text`
  color: ${p => p.theme.CATEGORY_TEXT};
`;