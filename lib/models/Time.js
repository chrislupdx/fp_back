const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true
  },
  dateobj: {
    type: Date,
    required: true
  },
  url: {
    type: mongoose.Types.ObjectId,
    ref: 'Hyperlink',
    required: true
  }

})
;

module.exports = mongoose.model('time', timeSchema);
