import styled from '@emotion/native';
import { ThemeProps } from 'theme';

export const FullflexContainer = styled.SafeAreaView<
  { color?: string } & { theme?: ThemeProps }
>`
  flex: 1;
  background-color: ${(props) => props.color ?? props.theme.background};
`;
