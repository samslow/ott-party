export interface ThemeProps {
  name?: string;
  background?: string;
  greyBackground?: string;
  primary?: string;
  secondary?: string;
  text?: string;
  greyText?: string;
  dividerColor?: string;
  serviceCardColor?: string;
}

const baseTheme = {
  greyText: '#888',
  primary: '#7F66FF',
};

const lightTheme = {
  ...baseTheme,
  name: 'light',
  background: '#f9f9f9',
  greyBackground: '#eee',
  text: '#000',
  dividerColor: '#D2D1D7',
  serviceCardColor: '#fff',
};

const darkTheme = {
  ...baseTheme,
  name: 'dark',
  background: '#222',
  greyBackground: '#333',
  text: '#fff',
  dividerColor: '#fff',
  serviceCardColor: '#fff',
};

export { lightTheme, darkTheme };
