const mongoose = require('./db')

const ArticleSchema = mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  insert: {
    type: String,
    require: true,
  },
  date: {
    type: Number,
    require: true,
  },
})

const ArticleModel = mongoose.model('Test', ArticleSchema)

module.exports = ArticleModel
