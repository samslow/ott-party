import styled from '@emotion/native';
import { ThemeProps } from 'theme';

interface PayStatusActiveProps {
  width: number;
}
  
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
