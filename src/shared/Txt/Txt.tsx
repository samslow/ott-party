import styled from '@emotion/native';
import FontWeight from '@src/types/FontWeight';
import { prop } from 'ramda';
import React from 'react';
import { ThemeProps } from 'theme';

interface TextProps {
  size: number;
  color: string;
  fontWeight: string;
}

interface Props {
  children: string;
  size?: number;
  color?: string;
  fontWeight?: FontWeight; // size랑 color 도 type주면 자동입력 되게 할 수 있는데 귀차나서 얘만..
}

export default function Txt({
  children,
  size = 17,
  color = '',
  fontWeight = 'normal',
}: Props) {
  return (
    <AdaptiveText size={size} color={color} fontWeight={fontWeight}>
      {children}
    </AdaptiveText>
  );
}

const AdaptiveText = styled.Text<TextProps & ThemeProps>`
  font-size: ${({ size }) => String(size)}px;
  color: ${(props) => props.color ?? props.theme.primary};
  font-weight: ${prop('fontWeight')};
`;
