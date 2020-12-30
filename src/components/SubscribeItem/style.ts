import styled from '@emotion/native';
import { ThemeProps } from 'theme';


export const Container = styled.View<ThemeProps>`
  background-color: ${(props) => props.theme.background};
  margin: 15px auto 0 auto;
  padding: 18px;
  border-radius: 10px;
  width: 88%;
  shadow-color: #000;
  shadow-offset: 0px 30px;
  shadow-opacity: 0.0891;
  shadow-radius: 60px;
  elevation: 3;
`;

