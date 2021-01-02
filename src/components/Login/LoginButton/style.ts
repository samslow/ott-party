import styled from '@emotion/native';
import { ThemeProps } from 'theme';

export const Button = styled.TouchableOpacity<{ theme?: ThemeProps }>`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.text};
  border-radius: 4px;
  background-color: #fff;
  width: 88%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 15px;
  position: relative;
`;

export const IconView = styled.View`
  position: absolute;
  left: 15px;
  top: 14px;
`;
