const express = require('express')
const router = express.Router()
const mongoClient = require('mongodb').mongoClient
const dbUrl = 'mongodb://localhost:27017'

const _checkUser = async (username) => {
  await mongoClient.connect(dbUrl, (err, cli) => {
    if (err) throw err
    const db = cli.db('express')
    const col = db.collection('user')
    const cursor = col.find({
      name: username
    })
    cursor.toArray((err, rows) => {
      return rows.length > 0
    })
    cli.close()
  })
}

router.post('/', async (req, res) => {
  const { username, password } = req.body
  const adventure = await userModel.findOne({ username })
  if (adventure) {
    return res.status(200).json(format('exist'))
  }
  else {
    const user = await userModel.create({
      username,
      password,
      name: ''
    })
    cli.close()
    res.status(200).end()
  })
})

router.get('/', (req, res) => {
  res.status(403).end()
})

router.put('/', function (req, res) {
  res.status(403).end()
})

router.delete('/', function (req, res) {
  res.status(403).end()
})

module.exports = router
