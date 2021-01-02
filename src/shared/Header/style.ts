import styled from '@emotion/native';
import { ThemeProps } from 'theme';

export const HeaderContainer = styled.View<{ theme?: ThemeProps }>`
  width: 100%;
  height: 50px;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.background};
`;

export const TouchableIconBox = styled.TouchableOpacity<{ theme?: ThemeProps }>`
  width: 34px;
  height: 34px;
  background-color: ${(p) => p.theme.background};
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const NullBox = styled.View`
  width: 34px;
`;
