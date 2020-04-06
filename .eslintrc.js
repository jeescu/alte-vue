module.exports = {
  extends: ['plugin:vue/recommended', 'airbnb-base'],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.common.js',
      },
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'max-len': 'off',

    'no-param-reassign': [2, { props: false }],

    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],

    'vue/max-attributes-per-line': [2, {
      singleline: 10,
      multiline: {
        max: 3,
        allowFirstLine: true,
      },
    }],

    'import/no-extraneous-dependencies': 'off',
  },
};