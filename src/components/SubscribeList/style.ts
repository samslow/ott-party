import styled from '@emotion/native';
import { ThemeProps } from 'theme';

export const FullFlexContainer = styled.SafeAreaView<ThemeProps>`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

export const Container = styled.View<ThemeProps>`
  background-color: ${(props) => props.theme.background};
  flex: 1;
`;

export const FlatListContainer = styled.FlatList<ThemeProps>`
  background-color: ${(props) => props.theme.background};
`;
