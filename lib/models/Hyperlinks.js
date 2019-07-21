const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  hashedUrl : {
    type: String,
  },
  name: {
    type: String,
  },
  timestamps: [{
    timestampObj: {
      type: mongoose.Types.ObjectId,
      ref: 'time',
    }
  }]
});


module.exports = mongoose.model('Hyperlink', urlSchema);
