const express = require('express')
const router = express.Router()
const userModel = require('../models/User')

// register
router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await userModel.create({
      username,
      password
    })
    return res.status(200).json(global.formatRes('注册成功', user)).end()
  } catch (err) {
    console.error(err)
    return res.status(400).json(global.formatRes('', err)).end()
  }
})

module.exports = router
