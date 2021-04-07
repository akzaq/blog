const mongoose = require('./db')

const ArticleSchema = mongoose.Schema({
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
