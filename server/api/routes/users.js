const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect('mongodb://localhost:27017/homease');
// Connecting to db

router.get('/', (req, res, next) => {
  console.log('Getting users');
  User.find(function(err, users){
    res.status(200).json({
      users: users,
      message: 'This is all of our users'
    });
  });
});

router.post('/', (req, res, next) => {
  console.log('Posting users');
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    date_of_birth: req.body.date_of_birth,
    location: req.body.location,
    gender: req.body.gender,
    role: req.body.role,
    username: req.body.username,
    password: req.body.password
  });

  newUser.save(function(err, result){
    if(err) throw err;
    res.status(200).json({
      message: 'Made a new user',
      user: newUser
    });
  });
});

module.exports = router;
