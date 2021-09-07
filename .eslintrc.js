module.exports = {
  env: {
    browser: true,
    es2021: true,
    // Combined with the jest (eslint-plugin-jest) plugin below to get rid of
    // "it()/test()/etc. not defined" errors.
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
  ],
  rules: {
    'no-empty-function': 0,
    '@typescript-eslint/no-empty-function': 1,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 1,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 1,
    'no-useless-constructor': 0,
    '@typescript-eslint/no-useless-constructor': 1,
    semi: 0,
    '@typescript-eslint/semi': 1,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // Fix "JSX not allowed in files with extension '.tsx'".
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.tsx',
          '.ts',
          '.jsx',
          '.js',
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
