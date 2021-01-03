import styled from '@emotion/native';
import { ThemeProps } from 'theme';

interface InputBoxProps {
  width?: string;
}

export const InputBox = styled.TextInput<
  InputBoxProps & { theme?: ThemeProps }
>`
  width: ${(p) => p.width ?? '100%'};
  background-color: white;
  color: ${(p) => p.theme.text ?? '#000'};
  border-radius: 10px;
  padding: 12px 20px;
  font-weight: 700;
  font-size: 15px;
`;
