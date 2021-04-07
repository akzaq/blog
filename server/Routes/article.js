const express = require('express')
const router = express.Router()
const ArticleModel = require('../Model/ArticleModel')
//获取文章
router.get('/articles', (req, res) => {
  // res.send('我是获取文章的接口')
  ArticleModel.find({}, (err, docs) => {
    if (err) {
      return res.status(500).send({ message: '服务器错误' })
    }
    res.status(200).send(docs)
  })
})

//创建文章
router.post('/create', (req, res) => {
  // res.send('我是提交文章的接口')
  ArticleModel.create(
    {
      title: req.body.title,
      insert: req.body.insert,
      date: req.body.date,
    },
    (err) => {
      if (err) {
        return res.status(500).send({ message: '服务器错误' })
      }
      res.status(200).send({ message: 'ok' })
    }
  )
})

//修改文章
router.put('/update/:id', (req, res) => {
  ArticleModel.updateOne(
    { _id: req.params.id },
    { title: req.body.title, insert: req.body.insert, date: req.body.date },
    (err) => {
      if (err) {
        res.status(500).send({ message: '服务器错误' })
      } else {
        res.status(200).send({ message: 'ok' })
      }
    }
  )
})

//删除文章
router.delete('/delete/:id', (req, res) => {
  ArticleModel.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send({ message: '服务器错误' })
    } else {
      res.status(200).send({ message: 'ok' })
    }
  })
})

module.exports = router
