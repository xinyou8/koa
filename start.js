require('babel-register')
(
  {
    plugins: ['babel-plugin-transform-es2015-modules-commonjs'],
  }
)
// 直接复制文章内容
module.exports = require('./app.js');
