const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
    time: {
        String,
        required: true
    }
    
})
;

module.exports = mongoose.model('time' timeSchema);
