import React from 'react';
import {
  SubItemCard,
  SubItemCardHeader,
  SubService,
  SubItemCardBody,
  SubItemCardSection,
  SubPriceContainer,
} from './style';
import { Txt, Divider } from '@src/shared';

interface SubscribeItemProps {
  id: number;
}

const SubscribeItem = ({ id }: SubscribeItemProps) => {
  return (
    <SubItemCard>
      <SubItemCardHeader>
        <SubService>
          <Txt>이미지</Txt>
          <Txt size={16} fontWeight={'700'}>
            Netflix
          </Txt>
        </SubService>
        <Txt size={9}>점점점</Txt>
      </SubItemCardHeader>
      <SubItemCardBody>
        <SubItemCardSection>
          <Txt size={16} fontWeight={'700'}>
            이번달 결제 예정 금액
          </Txt>
          <SubPriceContainer>
            <Txt size={14} fontWeight={'700'}>
              총 ₩ 14,500/month
            </Txt>
            <Txt size={14} fontWeight={'700'}>
              인당 ₩ 3,625
            </Txt>
          </SubPriceContainer>
        </SubItemCardSection>
        <Divider backgroundColor={'#D2D1D7'} marginTop={13} marginBottom={16} />
        <SubItemCardSection>
          <Txt size={16} fontWeight={'700'}>
            이번달 결제 예정 금액
          </Txt>
        </SubItemCardSection>
      </SubItemCardBody>
    </SubItemCard>
  );
};

export default SubscribeItem;
