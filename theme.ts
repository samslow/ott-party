export interface ThemeProps {
  name?: string;
  background?: string;
  greyBackground?: string;
  primary?: string;
  secondary?: string;
  text?: string;
  greyText?: string;
  dividerColor?: string;
}

const baseTheme = {
  greyText: '#888',
  primary: '#7F66FF',
};

const lightTheme = {
  ...baseTheme,
  name: 'light',
  background: '#fff',
  greyBackground: '#eee',
  text: '#000',
  dividerColor: '#D2D1D7',
};

const darkTheme = {
  ...baseTheme,
  name: 'dark',
  background: '#222',
  greyBackground: '#333',
  text: '#fff',
  dividerColor: '#fff',
};

export { lightTheme, darkTheme };
