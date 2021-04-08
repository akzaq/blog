const fs = require('fs')
const path = require('path')

module.exports = function readSecret() {
  let rt = fs.readFileSync(__dirname + '/SECRET.txt', 'utf-8')
  if (rt) {
    console.log('token读取成功')
    return rt
  } else {
    console.log('token读取失败')
  }
}
