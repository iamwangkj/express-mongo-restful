const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../models/User')

const SECRET = 'wangkj'

// sign in
router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await userModel.findOne({ username })
    // 用户未注册
    if (!user) {
      return res.status(422).json(global.formatRes('用户未注册'))
    }
    // 密码错误
    const isPwdValid = bcrypt.compareSync(password, user.password)
    if (!isPwdValid) {
      return res.status(422).json(global.formatRes('密码错误'))
    }
    // 登录成功
    return res.status(200).json(global.formatRes('登录成功', {
      user,
      token: jwt.sign({ id: String(user._id) }, SECRET)
    }))
  } catch (err) {
    res.status(500).json(global.formatRes('', err))
  }
})

module.exports = router
