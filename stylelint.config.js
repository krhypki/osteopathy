module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'css.lint.unknownAtRules': 'ignore',
    'scss.lint.unknownAtRules': 'ignore'
  }
}
