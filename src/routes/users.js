const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const userModel = require('../models/User')
const { SECRET } = require('../constant/index')

const auth = async (req, res, next) => {
  const raw = String(req.headers.authorization).split(' ').pop()
  const { id } = jwt.verify(raw, SECRET)
  req.user = await userModel.findById(id)
  next()
}

// query user
router.get('/', auth, async (req, res) => {
  return res.send(req.user)
})

// create user
router.post('/', async (req, res) => {
  const { username, password, name } = req.body
})

// update user
router.put('/', (req, res) => {
  res.status(403).end()
})

// delete user
router.delete('/', (req, res) => {
  res.status(403).end()
})

module.exports = router
