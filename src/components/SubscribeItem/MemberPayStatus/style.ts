import styled from '@emotion/native';
import { ThemeProps } from 'theme';

interface MemberRowProps {
  isLast?: boolean;
}

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
  margin-bottom: ${(props) => (props.isLast ? '0' : '10')}px;
`;
