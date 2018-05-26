const mongoose = require('mongoose');
const User = require('../api/models/user');
const async = require('async');

mongoose.connect('mongodb+srv://root:root@cluster0-kxvjp.mongodb.net/test?retryWrites=true');
// Connecting to db

const firstNames = ['Joey', 'Jonah', 'Cooper', 'Noah', 'John', 'Jacob', 'Jack', 'Lebron', 'Dwyane'];
const lastNames = ['Tepperman', 'Gallant', 'Midroni', 'Ifergan', 'Smith', 'James', 'Wade'];

const usersArray = []
for(var i = 0; i < 100; i++){
  let name = firstNames[Math.floor(Math.random()*firstNames.length)] + " "
  + lastNames[Math.floor(Math.random()*lastNames.length)];
  usersArray.push(new User({
    _id: new mongoose.Types.ObjectId(),
    name: name,
    date_of_birth: '1998-01-01',
    location: 'Toronto',
    gender: 'male',
    role: 'tennant',
    username: 'user'+i,
    password: 'password'+i
  }));
}

User.collection.insert(usersArray, function(err, docs){
  if(err) throw err;
  console.log('success!');
  return;
})
