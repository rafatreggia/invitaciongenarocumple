// .eslintrc.js
module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
     '@typescript-eslint/no-explicit-any':
      process.env.NODE_ENV === 'production' ? 'off' : 'warn',
    '@typescript-eslint/no-unused-vars':
      process.env.NODE_ENV === 'production' ? 'off' : 'warn',
  },
};

