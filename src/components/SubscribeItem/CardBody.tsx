import React from 'react';
import { Body, PriceContainer, Section, viewCss } from './style';
import { View } from 'react-native';
import { Divider, Txt } from '@src/shared';
import MemberPayStatus from './MemberPayStatus';
import PayStatus from './PayStatus';
import { ThemeProps } from 'theme';
import { useTheme } from '@emotion/react';

const totalAmount = 145000;
const memberCount = 4;
const paidMember = 2;

const CardBody = () => {
  const theme: ThemeProps = useTheme();

  return (
    <Body>
      <Section>
        <Txt size={16} fontWeight={'700'}>
          이번달 결제 예정 금액
        </Txt>
        <PriceContainer>
          <Txt size={14} fontWeight={'700'}>
            매월{' '}
            <Txt size={14} color={theme.primary}>
              6
            </Txt>
            일 알림 예정
          </Txt>
          <Txt size={14} fontWeight={'700'}>
            {`총 ₩ ${totalAmount.toLocaleString()}`}
          </Txt>
          <Txt size={14} fontWeight={'700'} style={{ marginTop: 11 }}>
            {`인당 ₩ ${(totalAmount / memberCount).toLocaleString()}`}
          </Txt>
        </PriceContainer>
      </Section>
      <Divider verticalMargin={20} />
      <Section>
        <Txt size={16} fontWeight={'700'}>
          이번달 결제 예정 금액
        </Txt>
        <PayStatus
          totalAmount={totalAmount}
          paidAmount={(totalAmount / memberCount) * paidMember}
        />
        <View style={viewCss}>
          <MemberPayStatus labelName={'미결제'} isPaid={false} />
          <MemberPayStatus labelName={'결제완료'} isPaid={true} />
        </View>
      </Section>
    </Body>
  );
};

export default CardBody;
