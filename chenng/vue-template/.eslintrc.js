module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // http://eslint.cn/docs/rules/
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  'rules': {
    // "off" 或 0 - 关闭规则
    // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

    // 要求箭头函数的参数使用圆括号
    'arrow-parens': 0,
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': 0,
    // 禁止出现未使用过的变量
    'no-unused-vars': 0,
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': 0,
    // 强制使用一致的缩进
    'indent': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
