const tweetModel = require('../models/tweet.model');

function list(text) {
  return tweetModel.list(text);
}

function tweetsPorUsuario(id) {
  return tweetModel.tweetsPorUsuario(id);
}

function usersRetweets(name) {
  return tweetModel.usersRetweets(name);
}

module.exports = {
  list, usersRetweets, tweetsPorUsuario,
};
