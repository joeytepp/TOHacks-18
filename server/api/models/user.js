const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  date_of_birth: {
    type: Date,
    required: true
  },

  gender: {
      type: String,
      required: true
  },

  location: {
    type: String,
    required: true
  },

  role: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', schema);
