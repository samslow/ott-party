import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();

export interface ThemeProps {
  theme?: {
    background: string;
    primary: string;
    secondary: string;
  };
}

const lightTheme = {
  background: '#fff',
  primary: '#000',
  secondary: '#333',
};

const darkTheme = {
  background: '#222',
  primary: '#fff',
  secondary: '#aaa',
};

export default colorScheme === 'light' ? lightTheme : darkTheme;
