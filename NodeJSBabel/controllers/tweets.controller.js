const tweetModel = require('../models/tweet.model');

function list() {
  return tweetModel.list();
}

function get(text) {
  return tweetModel.get(text);
}

module.exports = {
  list, get,
};
