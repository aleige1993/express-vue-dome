'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
//本地环境
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HTTPAPIURL:'"http://localhost:3001"'//本地请求地址
})
