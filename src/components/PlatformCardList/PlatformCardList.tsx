import { Platform } from '@components/Subscribe/Subscribe';
import React, { Dispatch, forwardRef } from 'react';
import { Image } from 'react-native';
import { CardContainer, CardItem, CardScrollView, imageCss } from './style';

interface Props {
  data: Platform[];
  onSelect: Dispatch<React.SetStateAction<string | null>>;
}

const PlatformCardList = forwardRef((props: Props, ref) => {
  return (
    <CardContainer>
      <CardScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}>
        {props.data.map((data, index) => (
          <CardItem
            key={data.name}
            between={index !== 0 && index < props.data.length}
            onPress={() => props.onSelect(data.name)}>
            <Image source={{ uri: data.imgUrl }} style={imageCss} />
          </CardItem>
        ))}
      </CardScrollView>
    </CardContainer>
  );
});

export default PlatformCardList;
