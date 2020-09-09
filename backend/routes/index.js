var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  // eslint-disable-next-line no-console
  console.log('here')
  res.json({ title: 'good job hitting the backend!' })
})

module.exports = router
