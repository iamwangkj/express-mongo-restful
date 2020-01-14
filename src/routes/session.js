const express = require('express')
const router = express.Router()
const mongodb = require('mongodb')
// const mysqlConfig = require('../config/db.js')

// 查询语句
const db = {
  query: 'select * from user where username=?',
  // insert: 'insert into user(id, name, age) value(0,?,?)',
  // queryAll: 'select * from user',
  // update: 'update user set name=?, age=? where id=?',
  // delete: 'delete from user where id=?'
}

const mongoClient = mongodb.MongoClient


router.post('/', (req, res, next) => {
  let { username, password } = req.body
  mongodb.connect('mogodb://localhost:27017/express', {useNewUrlParser: true}, (err, result) => {
    if(err) throw err
    
  })
})


router.delete('/', (req, res, next) => {
  let { username, password } = req.body
  res.status(200).json({
    msg: 'sign out'
  })
})


module.exports = router
