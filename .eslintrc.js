module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'max-len': ['error', { code: 180 }],
    'no-alert': 'off',
    'import/no-cycle': 'off',
  },
};
