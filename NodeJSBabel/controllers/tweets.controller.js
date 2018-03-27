const tweetModel = require('../models/tweet.model');

function list(text) {
  return tweetModel.list(text);
}

function usersRetweets(id) {
  return tweetModel.usersRetweets(id);
}

module.exports = {
  list, usersRetweets,
};
