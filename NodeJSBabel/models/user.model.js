const mongoose = require('mongoose');
const tweetModel = require('./tweet.model');

const User = mongoose.model('User', {
  t_id: Number,
  t_id_str: String,
  name: String,
});

function list() {
  return User.find();
}

function get(user) {
  return User.findOne({ name: user }).lean().exec() // ojo
    .then((usuario) => {
      console.log(usuario.id_str);
      return tweetModel.tweetsPorUsuario(usuario.id_str);
    });
}

module.exports = {
  list, get,
};
