const mongoose = require('./db')

const TestSchema = mongoose.Schema({
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

const TestModel = mongoose.model('Test', TestSchema)

module.exports = TestModel
