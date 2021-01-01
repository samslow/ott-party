import PlatformCardList from '@components/PlatformCardList';
import { titleBoxCss, TitleText } from '@components/PlatformCardList/style';
import { useTheme } from '@emotion/react';
import Header from '@src/shared/Header';
import { FullflexContainer } from '@src/shared/style';
import React, { useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import { ThemeProps } from 'theme';
import SubscriptionBill from './SubscriptionBill';

export interface Platform {
  name: string;
  imgUrl: string;
  plans: Plan[];
}

export interface Plan {
  planName: string;
  price: number;
}

const platformData: Platform[] = [
  {
    name: 'Netflix',
    imgUrl:
      'https://user-images.githubusercontent.com/26738367/103357573-dae84f00-4af6-11eb-94e1-15c5b527cb4b.jpeg',
    plans: [
      { planName: '프리미엄', price: 14_500 },
      { planName: '스탠다드', price: 12_000 },
      { planName: '베이식', price: 9_500 },
    ],
  },
  {
    name: 'DisneyPlus',
    imgUrl:
      'https://user-images.githubusercontent.com/26738367/103357576-dc197c00-4af6-11eb-870b-7c1047829058.jpeg',
    plans: [
      { planName: '프리미엄', price: 14_500 },
      { planName: '스탠다드', price: 12_000 },
      { planName: '베이식', price: 9_500 },
    ],
  },
  {
    name: 'YouTubePremium',
    imgUrl:
      'https://user-images.githubusercontent.com/26738367/103357581-dd4aa900-4af6-11eb-8265-c6b40143ae23.png',
    plans: [
      { planName: '프리미엄', price: 14_500 },
      { planName: '스탠다드', price: 12_000 },
      { planName: '베이식', price: 9_500 },
    ],
  },
];

export default function Subscribe() {
  const theme: ThemeProps = useTheme();
  const cardRef = useRef(null);
  const [selected, setSelected] = useState<string | null>(null);

  const selectedPlatform = useMemo(() => {
    const selectedIdx = platformData.findIndex(
      (data) => data.name === selected,
    );

    return selectedIdx === -1 ? null : platformData[selectedIdx];
  }, [platformData, selected]);

  return (
    <FullflexContainer color={theme?.greyBackground}>
      <Header title="구독 추가" />
      <PlatformCardList
        data={platformData}
        ref={cardRef}
        onSelect={setSelected}
      />
      <View style={titleBoxCss}>
        <TitleText selected={selected}>
          {selected ?? '위에서 구독할 플랫폼을 선택하세요'}
        </TitleText>
      </View>
      <SubscriptionBill selectedPlatform={selectedPlatform} />
    </FullflexContainer>
  );
}
