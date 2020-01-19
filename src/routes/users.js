const express = require('express')
const router = express.Router()
const mongoClient = require('mongodb').MongoClient
const dbUrl = 'mongodb://localhost:27017'

router.post('/', async (req, res) => {
  // 获取前台页面传过来的参数
  const { username, password } = req.body
  mongoClient.connect(dbUrl, (err, cli) => {
    if (err) throw err
    const db = cli.db('express')
    const col = db.collection('user')
    const cursor = col.find({
      name: username
    })
    cursor.toArray((err, rows) => {
      console.log('rows', rows)
      if (rows.length > 0) {
        res.status(400).json({
          msg: `${username} has exist`
        })
      }
      else {
        col.insertOne({
          name: username,
          password
        })
        res.status(201).json({
          msg: `${username} insert ok`
        })
      }
      cli.close()
    })
  })
})

router.get('/', (req, res) => {
  mongoClient.connect(dbUrl, (err, cli) => {
    const db = cli.db('express')
    const col = db.collection('user')
    const cursor = col.find()
    cursor.toArray((err, rows) => {
      res.status(200).json({
        msg: `get data success.`,
        data: rows
      })
    })
  })
})

router.put('/', function (req, res) {
  res.status(403).end()
})

router.delete('/', function (req, res) {
  res.status(403).end()
})

module.exports = router
