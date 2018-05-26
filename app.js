const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

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

app.use('/', (req, res, next) => {
  res.sendFile(__dirname+'/client/views/signup.html');
});

module.exports = app;
