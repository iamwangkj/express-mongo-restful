const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../models/User')

const SECRET = 'wangkj'

// sign out
router.delete('/', (req, res) => {
  const { username, password } = req.body
  res.status(200).json(global.formatRes('用户未注册'))
})

module.exports = router
