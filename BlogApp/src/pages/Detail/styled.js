import styled from 'styled-components/native';

export const HeaderIconButton = styled.TouchableOpacity``;
export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${p => p.theme.BACKGROUND};
`;
export const Scroll = styled.ScrollView`
  padding: 0 12px;
`;
export const Banner = styled.Image`
  width: 100%;
  height: 230px;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  margin-top: 18px;
  color: ${p => p.theme.TEXT_TITLE};
`;
export const Description = styled.Text`
  line-height: 20px;
  color: ${p => p.theme.TEXT_CONTENT};
`;
export const LinkButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;
export const LinkText = styled.Text`
  color: ${p => p.theme.LINKS};
  margin-left: 5px;
  font-size: 16px;
  margin-left: 6px;
`;