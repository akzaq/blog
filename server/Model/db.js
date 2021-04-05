const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://admin:123456@localhost:27017/testdb?authSource=admin',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      return console.log('链接失败')
    }
    console.log('链接成功')
  }
)

module.exports = mongoose
