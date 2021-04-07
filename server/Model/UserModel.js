const mongoose = require('./db')

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
