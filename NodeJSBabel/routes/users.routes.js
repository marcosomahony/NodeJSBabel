const ctrl = require('../controllers/users.controller');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  ctrl.list()
    .then(res.json.bind(res))
    .catch(next);
});

module.exports = router;
