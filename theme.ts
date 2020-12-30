export interface ThemeProps {
  theme?: {
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
  background: '#fff',
  text: '#000',
};

const darkTheme = {
  ...baseTheme,
  background: '#222',
  text: '#fff',
};

export { lightTheme, darkTheme };
