import styled from '@emotion/native';
import { ThemeProps } from 'theme';

export const SubscribeButton = styled.TouchableOpacity<{ theme?: ThemeProps }>`
  height: 52px;
  background-color: ${(props) => props.theme.primary};
  justify-content: center;
  align-items: center;
`;

export const SubscriptionList = styled.FlatList<{ theme?: ThemeProps }>``;
