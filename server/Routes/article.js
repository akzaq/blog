const express = require('express')
const router = express.Router()
const ArticleModel = require('../Model/ArticleModel')

//获取文章
router.get('/articles', async (req, res) => {
  try {
    let Articles = await ArticleModel.find({ userId: req.userId })
    res.send(Articles)
  } catch {
    res.send({ message: '服务器错误' })
  }
})

//创建文章
router.post('/create', async (req, res) => {
  try {
    await ArticleModel.create({
      userId: req.userId,
      title: req.body.title,
      insert: req.body.insert,
      date: req.body.date,
    })
    res.send({ message: 'ok' })
  } catch {
    res.send({ message: '服务器错误' })
  }
})

//修改文章
router.put('/update/:id', async (req, res) => {
  try {
    await ArticleModel.updateOne(
      { userId: req.userId, _id: req.params.id },
      { title: req.body.title, insert: req.body.insert, date: req.body.date }
    )
    res.send({ message: 'ok' })
  } catch {
    res.status(500).send({ message: '服务器错误' })
  }
})

//删除文章
router.delete('/delete/:id', async (req, res) => {
  try {
    await ArticleModel.deleteOne({
      userId: req.userId,
      _id: req.params.id,
    })
    res.send({ message: 'ok' })
  } catch {
    res.send({ message: '服务器错误' })
  }
})

module.exports = router
