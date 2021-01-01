import React from 'react';
import {
  Body,
  PriceContainer,
  Section,
  PayStatusContainer,
  PayStatusActive,
  PayStatusInActive,
  viewCss,
} from './style';
import { View } from 'react-native';
import { Divider, Txt } from '@src/shared';
import MemberPayStatus from './MemberPayStatus';

const CardBody = () => {
  return (
    <Body>
      <Section>
        <Txt size={16} fontWeight={'700'}>
          이번달 결제 예정 금액
        </Txt>
        <PriceContainer>
          <Txt size={14} fontWeight={'700'}>
            매월 6일 알림 예정
          </Txt>
          <Txt size={14} fontWeight={'700'}>
            총 ₩ 14,500
          </Txt>
          <Txt size={14} fontWeight={'700'}>
            인당 ₩ 3,625
          </Txt>
        </PriceContainer>
      </Section>
      <Divider backgroundColor={'#D2D1D7'} verticalMargin={13} />
      <Section>
        <Txt size={16} fontWeight={'700'}>
          이번달 결제 예정 금액
        </Txt>
        <PayStatusContainer>
          <PayStatusInActive>
            <Txt size={14} fontWeight={'700'} color={'#C4C4C4'}>
              ₩ 3,625
            </Txt>
          </PayStatusInActive>
          <PayStatusActive>
            <Txt size={14} fontWeight={'700'} color={'white'}>
              ₩ 10,875
            </Txt>
          </PayStatusActive>
        </PayStatusContainer>
        <View style={viewCss}>
          <MemberPayStatus labelName={'미결제'} isPaid={false} />
          <MemberPayStatus labelName={'결제완료'} isPaid={true} />
        </View>
      </Section>
    </Body>
  );
};

export default CardBody;
