const express = require('express')
const router = express.Router()
const userModel = require('../models/users')

<<<<<<< HEAD
router.post('/', (req, res, next) => {
=======
const format = (msg, data) => {
  return {
    msg: msg || '',
    data: data || null
  }
}

router.post('/', async (req, res) => {
>>>>>>> 4d089b3d9a3910c78b5f03602388fd3540e68dfb
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

<<<<<<< HEAD
router.delete('/', (req, res, next) => {
=======

router.delete('/', (req, res) => {
>>>>>>> 4d089b3d9a3910c78b5f03602388fd3540e68dfb
  const { username, password } = req.body
  res.status(200).json({
    msg: 'sign out'
  })
})

module.exports = router
