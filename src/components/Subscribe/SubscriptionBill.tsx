import { TopRoundBox } from '@components/PlatformCardList/style';
import React from 'react';
import BillingPlan from './BillingPlan';
import CollectingPeriod from './CollectingPeriod';
import PaymentAccount from './PaymentAccount';
import SendButton from './SendButton';
import SharingId from './SharingId';
import { Platform } from './Subscribe';
import Subscribers from './Subscribers';
import TotalPrice from './TotalPrice';

interface Props {
  selectedPlatform: Platform | null;
}

export default function SubscriptionBill({ selectedPlatform }: Props) {
  return (
    <TopRoundBox>
      <BillingPlan plans={selectedPlatform?.plans ?? []} />
      <Subscribers />
      <TotalPrice />
      <CollectingPeriod />
      <SharingId />
      <PaymentAccount />
      <SendButton />
    </TopRoundBox>
  );
}
