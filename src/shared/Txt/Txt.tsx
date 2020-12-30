import styled from '@emotion/native';
import FontWeight from '@src/types/FontWeight';
import React from 'react';
import { ThemeProps } from 'theme';

interface TextProps {
  size?: number;
  color?: string;
  fontWeight?: FontWeight; // size랑 color 도 type주면 자동입력 되게 할 수 있는데 귀차나서 얘만..
}

interface Props extends TextProps {
  children: string;
}

export default function Txt({ children, size, color, fontWeight }: Props) {
  return (
    <AdaptiveText size={size} color={color} fontWeight={fontWeight}>
      {children}
    </AdaptiveText>
  );
}

const AdaptiveText = styled.Text<TextProps & ThemeProps>`
  font-size: ${(props) => String(props?.size ?? 17)}px;
  color: ${(props) => props.color ?? props.text};
  font-weight: ${(props) => props.fontWeight ?? 'normal'};
`;
