const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const usersPath = require('./server/api/routes/users.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/client/views'))
// For access to local files

// ROUTES
app.use('/home', (req, res, next) => {
  res.sendFile(__dirname+'/client/views/home.html');
});

app.use('/login', (req, res, next) => {
  res.sendFile(__dirname+'/client/views/login.html');
});

app.use('/signup', (req, res, next) => {
  res.sendFile(__dirname+'/client/views/signup.html');
});

app.use('/search', (req, res, next) => {
  res.sendFile(__dirname+'/client/views/search.html');
});

app.use('/api/users', usersPath);

app.use('/', (req, res, next) => {
  res.sendFile(__dirname+'/client/views/signup.html');
});

module.exports = app;
