const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet', {
  created_at: Date,
  t_id: Number,
  t_id_str: String,
  text: String,
  user_id: String,
  entities: {},
});

function list(texto) {
  const query = {};
  if (texto) {
    query.$text = {
      $search: texto,
    };
  }
  return Tweet.find(query);
}

function tweetsPorUsuario(id) {
  return Tweet.find({ user_id: id });
}

function usersRetweets(idParam) {
  return Tweet.find({ id_str: idParam }, { user_id: 1, _id: 0 }).lean().exec();
}

module.exports = {
  list, tweetsPorUsuario, usersRetweets,
};
