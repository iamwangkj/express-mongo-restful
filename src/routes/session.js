const express = require('express')
const router = express.Router()
const userModel = require('../models/User')
const { formatRes } = require('../utils/format')
const MSG = require('../constant/msg')

// sign in
router.post('/', async (req, res) => {
  const { username, password } = req.body
  const adventure = await userModel.findOne({ username })
  if (adventure) {
    const { password: _realPwd } = adventure
    if (password === _realPwd) {
      res.status(200).json(formatRes('登录成功'))
    } else {
      res.status(200).json(formatRes('密码错误'))
    }
  } else {
    res.status(200).json(formatRes('用户未注册'))
  }
})

// sign out
router.delete('/', (req, res) => {
  const { username, password } = req.body
  res.status(200).json(formatRes('用户未注册'))
})

module.exports = router
