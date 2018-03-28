const mongoose = require('mongoose');
const tweetModel = require('./tweet.model');

const User = mongoose.model('User', {
  id: Number,
  id_str: String,
  name: String,
});

function list() {
  return User.find();
}

function get(user) {
  return User.findOne({ name: user }).lean().exec() // ojo
    .then((usuario) => { // eslint-disable-line
      return tweetModel.tweetsPorUsuario(usuario.id_str);
    });
}

module.exports = {
  list, get,
};
