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

router.post('/', async (req, res, next) => {
  // 获取前台页面传过来的参数
  const { username, password } = req.body
  mongoClient.connect(dbUrl, (err, cli) => {
    if (err) throw err
    const db = cli.db('express')
    const col = db.collection('user')
    _checkUser(username).then((dat, a) => {
      console.log('dat', dat, a)
    })
    res.status(200).end()
    return
    col.insertOne({
      name: username,
      password
    })
    cli.close()
    res.status(200).end()
  })
})

router.get('/', (req, res, next) => {
  mongodb.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err
    const db = client.db('express')
    const collection = db.uesr.insert({
      name: 'wangkj',
      password: 'wangkj'
    })
    console.log(collection)
    client.close()
  })
  res.status(200).end()
})

router.put('/', function (req, res, next) {
  res.status(403).end()
})

router.delete('/', function (req, res, next) {
  res.status(403).end()
})

module.exports = router
