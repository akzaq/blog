const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { createToken } = require('../Public/Token/token')
const UserModel = require('../Model/UserModel')

router.post('/login', async (req, res) => {
  let user = await UserModel.findOne({ username: req.body.username })
  //验证账户是否存在
  if (!user) {
    return res.send({ message: '用户不存在' })
  }

  //验证密码是否正确
  isPasswordValid = bcrypt.compareSync(req.body.password, user.password)
  if (!isPasswordValid) {
    res.send({ message: '密码错误' })
  } else {
    //生成token
    const userId = user._id
    const token = createToken({ id: String(userId) })

    //将token返回客户端
    res.send({ message: 'ok', token })
  }
})

router.post('/register', async (req, res) => {
  try {
    let user = await UserModel.create({
      username: req.body.username,
      password: req.body.password,
    })
    res.send(user)
  } catch {
    res.send({ message: '用户名已存在' })
  }
})

module.exports = router
