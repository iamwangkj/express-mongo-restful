const { connect, Schema, model } = require('mongoose')
const { db } = require('../config')

connect(`${db}/express`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = model('User', new Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    set (val) {
      return require('bcrypt').hashSync(val, 10)
    }
  }
  // name: { type: String }
}))
