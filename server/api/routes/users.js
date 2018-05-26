const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('Getting users')
  res.status(200).json({
    users: [],
    message: 'This is all of our users'
  })
});

module.exports = router;
