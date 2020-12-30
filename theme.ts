export interface ThemeProps {
  theme?: {
    name: string;
    background: string;
    primary: string;
    secondary: string;
    text: string;
  };
}

const baseTheme = {
  primary: '#2596FF',
};

const lightTheme = {
  ...baseTheme,
  name: 'light',
  background: '#fff',
  text: '#000',
};

const darkTheme = {
  ...baseTheme,
  name: 'dark',
  background: '#222',
  text: '#fff',
};

export { lightTheme, darkTheme };
