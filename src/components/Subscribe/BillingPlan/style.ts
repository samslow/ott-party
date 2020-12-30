import styled, { css } from '@emotion/native';
import { ThemeProps } from 'theme';

export const modalCss = css`
  margin: 0;
  justify-content: flex-end;
`;

export const ModalView = styled.View<{ theme?: ThemeProps }>`
  background-color: ${(p) => p.theme.background};
  height: 350px;
  padding: 30px 24px 0;
  border-radius: 30px 30px;
`;

export const PlanInputBox = styled.TouchableOpacity<{
  theme?: ThemeProps;
}>`
  background-color: ${(p) => p.theme.greyBackground};
  padding: 10px 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const inputTextCss = css`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const PlanItem = styled.TouchableOpacity<{ theme?: ThemeProps }>`
  background-color: ${(p) => p.theme.greyBackground};
  padding: 18px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;

  & + & {
    margin: 5px 0;
  }
`;
