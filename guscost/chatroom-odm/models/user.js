const mongoose = require('mongoose');
const Message = require('./message');

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        // Very long email validation regex from https://stackoverflow.com/a/201378
        return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    },
  },
  name: { type: String, default: null },
  birthday: { type: Date, default: null },
  state: { type: String, default: null }
});

// Add a model method to every user object
// eg:
// const user = await User.findById('ASDF');
// const message = await user.sendMessage('hello');
User.prototype.sendMessage = function(text) {
  return Message.create({ user: this, text: text });
}

module.exports = User;
