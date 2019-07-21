const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true
  },
  dateobj: {
    type: Date,
    required: true
  }

})
;

module.exports = mongoose.model('time', timeSchema);
