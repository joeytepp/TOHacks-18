const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Group = require('../models/group');
const User = require('../models/user');

mongoose.connect('mongodb://localhost:27017/homease');
// Connecting to db

router.get('/', (req, res, next) => {
  console.log('Getting groups')
  Group.find(function(err, groups){
    if(err) throw err;
    res.status(200).json({
      groups: groups,
      message: 'This is all of our groups'
    });

  });
})

router.post('/', (req, res, next) => {
  console.log('Posting groups');
  const newGroup = new Group({

  });
});

module.exports = router;
