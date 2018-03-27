const tweetModel = require('../models/tweet.model');

function list(text) {
  return tweetModel.list(text);
}

module.exports = {
  list,
};
