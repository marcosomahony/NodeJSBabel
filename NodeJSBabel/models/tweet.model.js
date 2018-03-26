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
  console.log('hola desde model');
  return Tweet.find();
}

module.exports = {
  list,
};
