import React from 'react';
import { Body, PriceContainer, Section } from './style';
import { Divider, Txt } from '@src/shared';

const CardBody = () => {
  return (
    <Body>
      <Section>
        <Txt size={16} fontWeight={'700'}>
          이번달 결제 예정 금액
        </Txt>
        <PriceContainer>
          <Txt size={14} fontWeight={'700'}>
            총 ₩ 14,500/month
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
      </Section>
    </Body>
  );
};

export default CardBody;
