const mongoose = require('mongoose');

const Message = mongoose.model('Message', {
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = Message;
