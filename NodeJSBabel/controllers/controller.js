const tweetModel = require('../models/tweet.model');

function list() {
  return tweetModel.list();
}

module.exports = {
  list,
};
