import styled, { css } from '@emotion/native';
import { ImageProps } from 'react-native';
import { ThemeProps } from 'theme';

export const CardContainer = styled.View`
  height: 150px;
  margin: 20px 0 0;
`;

export const CardScrollView = styled.ScrollView``;

export const CardItem = styled.TouchableOpacity<{ between: boolean }>`
  width: 150px;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;

  ${(p) => p.between && 'margin-left: 15px'}
`;

export const TitleText = styled.Text<{ selected: string | null } & ThemeProps>`
  color: ${({ selected, text }) => (selected == null ? '#888' : text)};
  font-size: ${(p) => (p.selected == null ? '18' : '40')}px;
  font-weight: 700;
`;

export const imageCss = css<ImageProps>`
  width: 100%;
  height: 100%;
`;

export const titleBoxCss = css`
  justify-content: center;
  align-items: center;
  height: 75px;
`;

export const TopRoundBox = styled.View<{ theme?: ThemeProps }>`
  height: 100%;
  background-color: ${(p) => p.theme.background ?? '#FFF'};
  border-radius: 35px 35px;
  padding: 30px 24px 0;
`;
