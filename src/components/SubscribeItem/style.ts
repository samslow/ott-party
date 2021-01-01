import styled, {css} from '@emotion/native';
import { ThemeProps } from 'theme';
import { ViewProps, ImageProps } from 'react-native';

interface MemberRowProps {
  isLast?: boolean;
}

interface PayStatusActiveProps {
  width: number;
}


export const ServiceCard  = styled.View<ThemeProps>`
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


export const Header = styled.View<ThemeProps>`
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


export const Body = styled.View<ThemeProps>`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

export const Section = styled.View<ThemeProps>`
  display: flex;
  width: 100%;
`;

export const PriceContainer = styled.View<ThemeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  background-color: #F9F9FB;
  border-radius: 18.5px;
  margin-top: 9px;
`;

export const PayStatusContainer = styled.View<ThemeProps>`
  width: 100%;
  border-radius: 18.5px;
  position: relative;
  margin-top: 9px;
`;

export const PayStatusActive = styled.View<PayStatusActiveProps & ThemeProps>`
  width: ${(props) => String(props.width)}%;
  height: 38px;
  border-radius: 18.5px;
  background-color: rgba(127, 102, 255, 1);
  position: absolute;
`;

export const PayStatusInActive = styled.View<ThemeProps>`
  width: 100%;
  height: 38px;
  border-radius: 18.5px;
  background-color: rgba(249, 249, 249, 1);
`;

export const PayStatusPrice = styled.View<ThemeProps>`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  padding: 0 17px;
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

export const MemberPayStatusContainer = styled.View<ThemeProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const PayStatusLabel = styled.View<ThemeProps>`
  width: 20%;
  margin-top: 3px;
`;

export const Members = styled.View<ThemeProps>`
  flex-grow: 1;
`;

export const MemberRow = styled.View<MemberRowProps & ThemeProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: ${(props) => props.isLast ? '0' : '10' }px;
`;

export const MemberView = styled.View<ThemeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90px;
  padding-right: 20px;
`;