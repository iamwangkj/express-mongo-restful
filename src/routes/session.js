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
    const { password: _realPwd } = adventure
    if (password === _realPwd) {
      res.status(200).json(format('登录成功'))
    }
    else {
      res.status(200).json(format('密码错误'))
    }
  }
  else {
    res.status(200).json(format('用户未注册'))
  }
})


router.delete('/', (req, res) => {
  const { username, password } = req.body
  res.status(200).json({
    msg: 'sign out'
  })
})


module.exports = router
