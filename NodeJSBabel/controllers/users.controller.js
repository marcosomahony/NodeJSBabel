const userModel = require('../models/user.model');

function list() {
  return userModel.list();
}

module.exports = {
  list,
};
