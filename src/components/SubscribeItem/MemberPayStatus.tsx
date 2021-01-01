import React from 'react';
import {
  MemberPayStatusContainer,
  MemberRow,
  PayStatusLabel,
  Members,
} from './style';
import { Txt } from '@src/shared';
import Member from './Member';

interface MemberPayStatusProps {
  labelName: string;
  isPaid: boolean;
}

const MemberPayStatus = ({ labelName, isPaid }: MemberPayStatusProps) => {
  return (
    <MemberPayStatusContainer>
      <PayStatusLabel>
        <Txt size={13} fontWeight={'700'}>
          {labelName}
        </Txt>
      </PayStatusLabel>
      <Members>
        <MemberRow>
          <Member name={'홍길동'} isPaid={isPaid} />
          <Member name={'홍길동'} isPaid={isPaid} />
          <Member name={'홍길동'} isPaid={isPaid} />
        </MemberRow>
        <MemberRow>
          <Member name={'홍길동'} isPaid={isPaid} />
          <Member name={'홍길동'} isPaid={isPaid} />
          <Member name={'홍길동'} isPaid={isPaid} />
        </MemberRow>
        <MemberRow isLast={true}>
          <Member name={'홍길동'} isPaid={isPaid} />
          <Member name={'홍길동'} isPaid={isPaid} />
          <Member name={'홍길동'} isPaid={isPaid} />
        </MemberRow>
      </Members>
    </MemberPayStatusContainer>
  );
};

export default MemberPayStatus;
