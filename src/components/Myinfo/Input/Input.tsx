import React from 'react';
import { useTheme } from '@emotion/react';
import { ThemeProps } from 'theme';
import { InputBox } from './style';
import { KeyboardTypeOptions } from 'react-native';

interface InputProps {
  placeHolder: string;
  keyboardType?: KeyboardTypeOptions;
  width?: string;
}

const Input = ({
  placeHolder,
  width,
  keyboardType = 'default',
}: InputProps) => {
  const theme: ThemeProps = useTheme();
  return (
    <InputBox
      placeholder={placeHolder}
      placeholderTextColor={theme.greyText}
      width={width}
      keyboardType={keyboardType}
    />
  );
};

export default Input;
