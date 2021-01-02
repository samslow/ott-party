import styled from '@emotion/native';
import React from 'react';
import { ThemeProps } from 'theme';

interface DividerProps {
  width?: number;
  backgroundColor?: string;
  verticalMargin?: number;
}

export default function Divider({
  width,
  backgroundColor,
  verticalMargin,
}: DividerProps) {
  return (
    <AdaptiveDivider
      width={width}
      backgroundColor={backgroundColor}
      verticalMargin={verticalMargin}
    />
  );
}

const AdaptiveDivider = styled.View<DividerProps & ThemeProps>`
  background-color: ${(props) => props.backgroundColor ?? props.text};
  width: ${(props) => String(props.width ?? 100)}%;
  height: 1px;
  margin: ${(props) => String(props.verticalMargin ?? 0)}px auto;
`;
