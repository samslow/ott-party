import styled from '@emotion/native';
import React from 'react';
import { ThemeProps } from 'theme';

interface DividerProps {
  width?: number;
  backgroundColor?: string;
  marginTop?: number;
  marginBottom?: number;
}

export default function Divider({
  width,
  backgroundColor,
  marginTop,
  marginBottom,
}: DividerProps) {
  return (
    <AdaptiveDivider
      width={width}
      backgroundColor={backgroundColor}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  );
}

const AdaptiveDivider = styled.View<DividerProps & ThemeProps>`
  background-color: ${(props) => props.backgroundColor ?? props.theme.text};
  margin: ${(props) => props.marginTop ?? 0}px auto
    ${(props) => props.marginTop ?? 0}px auto;
  width: ${(props) => String(props.width ?? 100)}%;
  height: 1px;
`;
