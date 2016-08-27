'use strict';
const express = require('express')
const router = express.Router()

/* GET home page. */
router.post('/', (req, res) => {
  res.json({message: 'Запрос успено выполнен'})
})

module.exports = router
