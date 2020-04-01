const express = require('express')
const router = express.Router()
const mongoClient = require('mongodb').MongoClient

router.post('/', (req, res, next) => {
  const { username, password } = req.body
})

router.delete('/', (req, res, next) => {
  const { username, password } = req.body
  res.status(200).json({
    msg: 'sign out'
  })
})

module.exports = router
