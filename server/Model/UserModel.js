const mongoose = require('./db')
const bcrypt = require('bcryptjs')

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    set(params) {
      //密码加密
      params = bcrypt.hashSync(params, 10)
      return params
    },
  },
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
