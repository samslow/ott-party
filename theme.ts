export interface ThemeProps {
  name?: string;
  background?: string;
  greyBackground?: string;
  primary?: string;
  secondary?: string;
  text?: string;
}

const baseTheme = {
  primary: '#2596FF',
};

const lightTheme = {
  ...baseTheme,
  name: 'light',
  background: '#fff',
  greyBackground: '#eee',
  text: '#000',
};

const darkTheme = {
  ...baseTheme,
  name: 'dark',
  background: '#222',
  greyBackground: '#333',
  text: '#fff',
};

export { lightTheme, darkTheme };
