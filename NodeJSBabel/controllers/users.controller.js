const userModel = require('../models/user.model');

function list() {
  return userModel.list();
}

function get(name) {
  return userModel.get(name);
}

module.exports = {
  list, get,
};
