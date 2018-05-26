const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

  users: {
    type: [
      {
        _id: mongoose.Schema.Types.ObjectId,
      }
    ],
    required: true
  },

  numFilled: {
    type: Number,
    required: true
  },

  numTotal: {
    type: Number,
    required: true
  }

});
