import React from 'react';
import { Txt } from '@src/shared';
import { Button, IconView } from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface LoginButton {
  name: string;
  iconName?: string;
  iconColor?: string;
  onPress: () => void;
}

const LoginButton = ({ name, iconName, iconColor, onPress }: LoginButton) => {
  return (
    <Button onPress={onPress}>
      {iconName ? (
        <IconView>
          <Icon name={iconName} color={iconColor} size={32} />
        </IconView>
      ) : null}
      <Txt size={18}>{name}</Txt>
    </Button>
  );
};

export default LoginButton;
