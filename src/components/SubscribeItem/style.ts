import styled from '@emotion/native';
import { ThemeProps } from 'theme';


export const SubItemCard = styled.View<ThemeProps>`
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


export const SubItemCardHeader = styled.View<ThemeProps>`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const SubService = styled.View<ThemeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


export const SubItemCardBody = styled.View<ThemeProps>`
  display: flex;
  width: 100%;
  padding: 10px 0;
`;

export const SubItemCardSection = styled.View<ThemeProps>`
  display: flex;
  width: 100%;
`;

export const SubPriceContainer = styled.View<ThemeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  background-color: #F9F9FB;
  border-radius: 18.5px;
`