const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet', {
  created_at: Date,
  t_id: Number,
  t_id_str: String,
  text: String,
  user: {},
  entities: {},
});

function list(texto) {
  const query = {};
  if (texto) {
    query.$text = {
      $search: texto,
    };
  }
  console.log(query);
  return Tweet.find(query);
}

function tweetsPorUsuario(name) {
  // por algun motivo ha decidido que no va a imprimir
  return Tweet.find({ 'user.name': name });
}

function usersRetweets(idParam) {
  return Tweet.find({ id_str: idParam }, { user_id: 1, _id: 0 }).lean().exec();
}

module.exports = {
  list, tweetsPorUsuario, usersRetweets,
};
