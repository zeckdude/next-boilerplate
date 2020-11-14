module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'prettier/prettier': ['error'],
    curly: 'error',
    // Allow the unary `++` to be used in a for loop setup
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    // TODO: Fix circular dependencies and remove this rule (https://favro.com/organization/836606d5422c2627a54881d9/69e82d9d491429adb4080d62?card=Tou-2179)
    'import/no-cycle': 0,
    // When defining a function, don't enforce the space between a named function name and the arguments
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    // Form elements are required to be wrapped by label elements. This defines custom components to be eligible to be wrapped by label.
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['label'],
        controlComponents: ['CardElement'],
        depth: 3,
      },
    ],
    'no-underscore-dangle': 0,
    'no-use-before-define': ['warn', { functions: true, classes: true, variables: true }],
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 'off',
    'react/forbid-prop-types': 0,
  },
  globals: {
    React: 'writable',
  },
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
};
