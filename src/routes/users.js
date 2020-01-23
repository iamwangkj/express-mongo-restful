const express = require('express')
const router = express.Router()
const userModel = require('../models/users')

router.post('/', async (req, res) => {
  const { username, password } = req.body
  const adventure = await userModel.findOne({ username })
  if (!adventure) {
    const user = await userModel.create({
      username,
      password,
      name: ''
    })
    return res.status(200).json(user)
  }
  else {
    return res.status(200).json({
      msg: '已存在'
    })
  }



})

router.get('/', (req, res) => {
  
})

router.put('/', function (req, res) {
  res.status(403).end()
})

router.delete('/', function (req, res) {
  res.status(403).end()
})

module.exports = router
