import styled, { css } from '@emotion/native';
import { ThemeProps } from 'theme';

export const safeAreaViewCss = css`
  position: relative;
  flex: 1;
`;

export const UserView = styled.View`
  margin-top: 30px;
  align-items: center;
`;

export const IconBox = styled.View`
  width: 100px;
  height: 100px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin-bottom: 10px;
`;

export const InputView = styled.View`
  width: 87%;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export const SignOutButton = styled.TouchableOpacity<{ theme?: ThemeProps }>`
  background-color: ${(p) => p.theme.primary};
  position: absolute;
  width: 100%;
  bottom: 0;
  align-items: center;
  padding: 15px 0;
`;

export const Row = styled.View<{ marginTop?: number }>`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${(p) => String(p.marginTop ?? 0)}px;
`;
