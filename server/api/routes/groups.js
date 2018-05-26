const express = require('express');
const async = require('async');
const router = express.Router();
const mongoose = require('mongoose');
const Group = require('../models/group');
const User = require('../models/user');

mongoose.connect('mongodb+srv://root:root@cluster0-kxvjp.mongodb.net/test?retryWrites=true');
// Connecting to db

router.get('/', (req, res, next) => {
  console.log('Getting groups')
  Group.find(function(err, groups){
    if(err) throw err;
    let groupCounter = 0;
    const groupRes = []
    async.forEach(groups, function(group, callback1){
      let userCounter = 0;
      let usersArray = [];
      console.log(userCounter, +", "+ group.users.length);
      async.forEach(group.users, function(user, callback2){
        User.findById(user.id, function(err, newUser){
          console.log(groupCounter +", " + groups.length);
          console.log(newUser);
          usersArray.push(newUser);
          userCounter++;
          if(userCounter == group.users.length){
            console.log('Next user');
            groupCounter++;
            group.users = usersArray;
            groupRes.push({
              _id: group._id,
              users: usersArray,
              numFilled: group.numFilled,
              numTotal: group.numTotal
            });

            if(groupCounter == groups.length){
              res.status(200).json({
                groups: groupRes,
                message: 'This is all of our groups'
              });
            }
            callback1();
          }
          callback2();
        })
      });
    });
    /*async.forEach(groups[1].users, function(user, callback){
        User.findById(user.id, function(err, newUser){
          usersArray.push(newUser);
          counter++;
          if(counter == groups[1].users.length){
            res.status(200).json({
              groups: groups,
              message: 'This is all of our groups',
              users: usersArray
            });
          }
          callback();
        });
      });*/

    });



});

router.post('/', (req, res, next) => {
  console.log('Posting groups');
  const newGroup = new Group({
    _id: mongoose.Types.ObjectId(),
    users: req.body.users,
    numFilled: req.body.users.length,
    numTotal: req.body.numTotal
  });

  newGroup.save(function(err, result){
    if(err) throw err;
    res.status(200).json({
      message: 'Made a new group',
      group: newGroup
    });
  });
});

module.exports = router;
