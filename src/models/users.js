const { connect, Schema, model } = require('mongoose')
const { dbUrl } = require('../config/db')

connect(`${dbUrl}/express`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const userSchema = new Schema({
  username: { type: String },
  password: { type: String },
  name: { type: String }
})

module.exports = model('users', userSchema)
