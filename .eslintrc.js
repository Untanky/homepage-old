module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.ts'],
      },
    },
  },
  rules: {
    'no-shadow': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        vue: 'never',
        ts: 'never',
      },
    ],
    '@typescript-eslint/no-shadow': ['error'],
  },
};
