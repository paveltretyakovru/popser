'use strict';
const express = require('express')
const router = express.Router()

/* GET home page. */
router.post('/', (req, res) => {
  // req.session.user_id = 'testUserId :)';
  console.log('SESSION ---->>>>', req.session);
  res.json({message: 'Запрос успено выполнен'})
})

module.exports = router
