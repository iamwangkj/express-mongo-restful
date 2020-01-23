const { connect, Schema, model } = require('mongoose')

connect('mongodb://localhost:27017/express', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const userSchema = new Schema({
  username: {type: String},
  password: {type: String},
  name: {type: String}
})

module.exports = model('users', userSchema)