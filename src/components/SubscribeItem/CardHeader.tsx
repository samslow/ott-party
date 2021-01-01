import React from 'react';
import { Image } from 'react-native';
import { Header, SubService, headerImageCss } from './style';
import { Txt } from '@src/shared';

const CardHeader = () => {
  return (
    <Header>
      <SubService>
        <Image
          source={{
            uri:
              'https://user-images.githubusercontent.com/26738367/103357573-dae84f00-4af6-11eb-94e1-15c5b527cb4b.jpeg',
          }}
          style={headerImageCss}
        />
        <Txt size={16} fontWeight={'700'} style={{ marginLeft: 16 }}>
          Netflix
        </Txt>
      </SubService>
      <Txt size={9}>점점점</Txt>
    </Header>
  );
};

export default CardHeader;
