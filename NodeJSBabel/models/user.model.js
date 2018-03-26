const mongoose = require('mongoose');

const User = mongoose.model('User', {
  id: Number,
  id_str: String,
  name: String,
});

function list() {
  console.log('hola desde user model');
  return User.find();
}

module.exports = {
  list,
};
