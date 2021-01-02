import styled, { css } from '@emotion/native';
import { ThemeProps } from 'theme';
import { ViewProps, ImageProps } from 'react-native';

export const ServiceCard = styled.View<{ theme?: ThemeProps }>`
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

export const Header = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SubService = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Body = styled.View`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

export const Section = styled.View`
  display: flex;
  width: 100%;
`;

export const PriceContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  background-color: #f9f9f9;
  border-radius: 18.5px;
  margin-top: 9px;
`;

export const viewCss = css<ViewProps>`
  width: 100%;
  margin-top: 12px;
`;

export const headerImageCss = css<ImageProps>`
  width: 24px;
  height: 24px;
  border-radius: 5px;
`;
