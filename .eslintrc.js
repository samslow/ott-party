const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {},
      alias: [
        ['~', './src'],
        ['@constants', './src/constants'],
        ['@components', './src/components'],
        ['@stacks', './src/stacks'],
        ['@containers', './src/containers'],
        ['@store', './src/store/*'],
        ['@models', './src/models'],
        ['@hooks', './src/hooks'],
        ['@remotes', './src/remotes'],
        ['@utils', './src/utils/*'],
      ],
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [off, { ignoreRestSiblings: true }],
    '@typescript-eslint/explicit-function-return-type': off,
    '@typescript-eslint/no-empty-interface': off,
    '@typescript-eslint/explicit-module-boundary-types': off,
    '@typescript-eslint/no-inferrable-types': warn,
    '@typescript-eslint/no-empty-function': off,
    '@typescript-eslint/prefer-as-const': off,
    'react/display-name': off,
  },
};
