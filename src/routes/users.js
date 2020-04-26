const express = require('express')
const router = express.Router()
const userModel = require('../models/User')

// create user
router.post('/', async (req, res) => {
  const { username, password, name } = req.body
})

// query user
router.get('/', async (req, res) => {
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
