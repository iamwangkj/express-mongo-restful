const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.send('you are in page index')
})

router.post('/', (req, res) => {
  console.log('req', req.body)
  // res.send('you are in page index')
  res.end('req.body')
})

module.exports = router
