const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet', {
  created_at: String,
  id: Number,
  id_str: String,
  text: String,
  user: {},
  entities: {},
});

function list() {
  return Tweet.find();
}

function get(texto) {
  return Tweet.find({ $text: { $search: texto } });
}

module.exports = {
  list, get,
};
