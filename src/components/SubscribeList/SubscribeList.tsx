import { StackNavigationProp } from '@react-navigation/stack';
import { Txt } from '@src/shared';
import { FullflexContainer } from '@src/shared/style';
import React from 'react';
import { StackParams } from '../../../App';
import { SubscribeButton } from './style';

export default function SubscribeList({
  navigation,
}: {
  navigation: StackNavigationProp<StackParams>;
}) {
  return (
    <FullflexContainer>
      {/* 여기는 테스트로 보기위한 용도입니다.  */}
      <Txt>구독 서비스 추가</Txt>
      <SubscribeButton onPress={() => navigation.navigate('Subscribe')}>
        <Txt size={22} color="#FFF" fontWeight="bold">
          구독 서비스 추가
        </Txt>
      </SubscribeButton>
    </FullflexContainer>
  );
}
