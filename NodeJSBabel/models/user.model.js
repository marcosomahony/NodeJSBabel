const mongoose = require('mongoose');

const User = mongoose.model('Tweet', {
  id: Number,
  id_str: String,
  name: String,
});

function list() {
  console.log('hola desde model');
  return User.find();
}

module.exports = {
  list,
};
