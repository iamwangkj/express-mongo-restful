const express = require('express')
const router = express.Router()
const userModel = require('../models/User')

// register
router.post('/', async (req, res) => {
  try {
    const { name, pwd } = req.body
    console.log(name, pwd)
    const user = await userModel.create({
      username: name,
      password: pwd
    })
    return res.status(200).json(global.formatRes('注册成功', user)).end()
  } catch (err) {
    console.error(err)
  }
  // const adventure = await userModel.findOne({ username })
  // if (adventure) {
  //   return res.status(200).json(formatRes(MSG.EXIST, adventure))
  // } else {
  //   const user = await userModel.create({
  //     username,
  //     password,
  //     name
  //   })
  //   return res.status(200).json(global.formatRes(MSG.CREATE_SUCCESS, user))
  // }
})

module.exports = router
