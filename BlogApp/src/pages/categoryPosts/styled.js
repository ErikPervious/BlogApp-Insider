import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.BACKGROUND};;
`;
export const ContainerLoading = styled.View`
  flex: 1;
  padding-top: 20px;
`;
export const ContainerIsEmpty = styled.View`
  flex: 1;
  align-items: center;
  padding: 18px;
`;
export const EmptyText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${p => p.theme.EMPTY_TEXT};
`;
export const EmptyButton = styled.TouchableOpacity`
  background-color: ${p => p.theme.EMPTY_BUTTON};
  padding: 8px;
  margin-top: 12px;
  border-radius: 4px;
`;
export const EmptyButtonText = styled.Text`
  color: ${p => p.theme.EMPTY_BUTTON_TEXT};
`;