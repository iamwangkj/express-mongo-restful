const express = require('express')
const router = express.Router()
const userModel = require('../models/users')

const format = (msg, data) => {
  return {
    msg: msg || '',
    data: data || null
  }
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
    return res.status(200).json(format('create', user))
  }
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
