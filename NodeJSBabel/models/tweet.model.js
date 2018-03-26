const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet', {
  created_at: String,
  id: Number,
  id_str: String,
  text: String,
  user: {},
  entities: {},
});

// para la busqueda con texto: db.tweets.find( { $text: { $search: "hola" } } )

function list() {
  console.log('hola desde tweet model');
  return Tweet.find();
}

function get(texto) {
  console.log('hola desde tweet model, busqueda por texto');
  return Tweet.find({ $text: { $search: texto } });
}

module.exports = {
  list, get,
};
