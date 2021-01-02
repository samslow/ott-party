import React from 'react';
import { Txt } from '@src/shared';
import { Button, NullBox } from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image, ImageSourcePropType } from 'react-native';

interface LoginButton {
  name: string;
  iconName?: string;
  iconColor?: string;
  image?: ImageSourcePropType;
  onPress: () => void;
}

const LoginButton = ({
  name,
  iconName,
  iconColor,
  image,
  onPress,
}: LoginButton) => {
  return (
    <Button onPress={onPress}>
      {iconName || image ? null : <NullBox />}
      {iconName ? <Icon name={iconName} color={iconColor} size={32} /> : null}
      {image ? (
        <Image source={image} style={{ width: 32, height: 30 }} />
      ) : null}
      <Txt size={18}>{name}</Txt>
      <NullBox />
    </Button>
  );
};

export default LoginButton;
