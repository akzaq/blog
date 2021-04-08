const { analysisToken, isOverdue } = require('../Public/Token/token')

//验证处理token
const verify = (req, res, next) => {
  try {
    const raw = req.headers.authorization
    const userId = analysisToken(raw)
    req.userId = userId
    console.log('token验证成功')
    next()
  } catch (err) {
    console.log(err)
    console.log('token验证失败')
    res.send({ message: 'token validation fails' })
  }
}

//验证token是否过期
const overDue = (req, res, next) => {
  const authorization = req.headers.authorization
  const info = isOverdue(authorization)
  if (info) {
    console.log('token未过期')
    next()
  } else {
    res.send({ message: 'overdue' })
  }
}

module.exports = { verify, overDue }
