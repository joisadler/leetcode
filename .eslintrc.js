module.exports = {
  env: {
    browser: true,
    es2022: true,
    amd: true,
    node: true,
    'jest/globals': true,
  },
  plugins: ['jest'],
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
  },
};
