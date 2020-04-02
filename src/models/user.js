const { connect, Schema, model } = require('mongoose')
const { db } = require('../config')

connect(`${db}/express`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const userSchema = new Schema({
  username: { type: String },
  password: { type: String },
  name: { type: String }
})

module.exports = model('User', userSchema)
