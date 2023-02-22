module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  plugins: ['spellcheck', 'prettier'],
  rules: {
      "prettier/prettier": "error",
    'spellcheck/spell-checker': [
      1,
      {
        comments: true,
        strings: false,
        identifiers: true,
        templates: true,
        ignoreRequire: true,
        lang: 'en_US',
        skipWords: [
          'dict',
          'aff',
          'hunspellchecker',
          'hunspell',
          'utils',
          'lang',
          'codempire',
          'persistor',
          'msMrs',
        ],
        skipIfMatch: ['http://[^s]*'],
        minLength: 3,
      },
    ],
  },
};
