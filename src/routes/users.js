const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const { dbUrl } = require('../config/db')
const userModel = require('../models/users')
const { formatRes } = require('../utils/format')
const MSG = require('../constant/msg')

// create user
router.post('/', async (req, res) => {
  const { username, password, name } = req.body
  const adventure = await userModel.findOne({ username })
  if (adventure) {
    return res.status(200).json(formatRes(MSG.EXIST, adventure))
  } else {
    const user = await userModel.create({
      username,
      password,
      name
    })
    return res.status(200).json(formatRes(MSG.CREATE_SUCCESS, user))
  }
})

// query user
router.get('/', async (req, res) => {
  const { username } = req.body
  const adventure = await userModel.findOne({ username })
  if (adventure) {
    return res.status(200).json(formatRes(MSG.EXIST, adventure))
  } else {
    return res.status(200).json(formatRes(MSG.NO_EXIST))
  }
})

// update user
router.put('/', function (req, res) {
  res.status(403).end()
})

// delete user
router.delete('/', function (req, res) {
  res.status(403).end()
})

module.exports = router
