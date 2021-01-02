import styled from '@emotion/native';

interface MemberRowProps {
  isLast?: boolean;
}

export const MemberPayStatusContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const PayStatusLabel = styled.View`
  width: 20%;
  margin-top: 3px;
`;

export const Members = styled.View`
  flex-grow: 1;
`;

export const MemberRow = styled.View<MemberRowProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: ${(props) => (props.isLast ? '0' : '10')}px;
`;
