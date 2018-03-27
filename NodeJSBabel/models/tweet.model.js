const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet', {
  created_at: Date,
  t_id: Number,
  t_id_str: String,
  text: String,
  user_id: String,
  entities: {},
});

function list() {
  return Tweet.find();
}

function get(texto) {
  return Tweet.find({ $text: { $search: texto } });
}

function tweetsPorUsuario(id) {
  return Tweet.find({ user_id: id });
}

module.exports = {
  list, get, tweetsPorUsuario,
};
