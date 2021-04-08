const jwt = require('jsonwebtoken')
const readSecret = require('./Secret/readSecret')

const SECRET = readSecret()

//生成token
function createToken(data) {
  const token = jwt.sign(data, SECRET) + '@' + Date.now()
  return token
}

//解析token,默认token过期时间为1小时
function analysisToken(authorization) {
  let arr = authorization.split('@')
  let { id } = jwt.verify(arr[0], SECRET)
  return id
}

function isOverdue(authorization, time = 3600000) {
  let arr = authorization.split('@')
  let nowTime = Date.now()
  let oldTime = Number(arr.pop())
  if (nowTime - oldTime <= time) {
    console.log('token未过期')
    return true
  } else {
    console.log('token已过期')
    return false
  }
}
module.exports = {
  createToken,
  analysisToken,
  isOverdue,
}
