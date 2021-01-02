import React from 'react';
import {
  MemberPayStatusContainer,
  MemberRow,
  PayStatusLabel,
  Members,
} from './style';
import { Txt } from '@src/shared';
import Member from '../Member';

interface MemberPayStatusProps {
  labelName: string;
  isPaid: boolean;
}

const dummyData: string[] = [
  '홍길동1',
  '홍길동2',
  '홍길동3',
  '홍길동4123123',
  '홍길동5',
  '홍길동6',
  '홍길동7',
  '홍길동8',
];

const MemberPayStatus = ({ labelName, isPaid }: MemberPayStatusProps) => {
  return (
    <MemberPayStatusContainer>
      <PayStatusLabel>
        <Txt size={13} fontWeight={'700'}>
          {labelName}
        </Txt>
      </PayStatusLabel>
      <Members>
        {[...Array(Math.ceil(dummyData.length / 3)).keys()].map(
          (val, index) => {
            return (
              <MemberRow key={index}>
                {dummyData.slice(val * 3, val * 3 + 3).map((val, index) => {
                  return <Member key={index} name={val} isPaid={isPaid} />;
                })}
              </MemberRow>
            );
          },
        )}
      </Members>
    </MemberPayStatusContainer>
  );
};

export default MemberPayStatus;
