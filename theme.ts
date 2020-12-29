import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();

export interface ThemeProps {
  theme?: {
    background: string;
    primary: string;
    secondary: string;
  };
}

const baseTheme = {
  primary: '#2596FF',
};

const lightTheme = {
  ...baseTheme,
  background: '#fff',
  primaryText: '#000',
  secondaryText: '#333',
};

const darkTheme = {
  ...baseTheme,
  background: '#222',
  primaryText: '#fff',
  secondaryText: '#aaa',
};

export default colorScheme === 'light' ? lightTheme : darkTheme;
