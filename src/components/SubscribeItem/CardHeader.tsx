import React from 'react';
import { Header, SubService } from './style';
import { Txt } from '@src/shared';

const CardHeader = () => {
  return (
    <Header>
      <SubService>
        <Txt>이미지</Txt>
        <Txt size={16} fontWeight={'700'}>
          Netflix
        </Txt>
      </SubService>
      <Txt size={9}>점점점</Txt>
    </Header>
  );
};

export default CardHeader;
