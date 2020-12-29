import { Txt } from '@src/shared';
import React from 'react';
import { Container, FullFlexContainer } from './style';

const SubscribeList = () => {
  return (
    <FullFlexContainer>
      <Container>
        {/* 여기는 테스트로 보기위한 용도입니다.  */}
        <Txt>구독 서비스 추가</Txt>
        <Txt size={22} color={'#888'} fontWeight="bold">
          구독 서비스 추가
        </Txt>
      </Container>
    </FullFlexContainer>
  );
};

export default SubscribeList;
