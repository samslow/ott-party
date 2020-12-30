import styled from '@emotion/native';
import { ThemeProps } from 'theme';

export const SubscribeButton = styled.TouchableOpacity<ThemeProps>`
  height: 52px;
  background-color: ${(props) => props.primary};
  justify-content: center;
  align-items: center;
`;

export const SubscriptionList = styled.FlatList<ThemeProps>`
  background-color: ${(props) => props.background};
`;

export const SubscriptionList = styled.FlatList<ThemeProps>`
  background-color: ${(props) => props.theme.background};
`;
