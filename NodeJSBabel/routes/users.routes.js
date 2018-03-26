const ctrl = require('../controllers/users.controller');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  ctrl.list()
    .then(res.json.bind(res))
    .catch(next);
});

router.route('/:name')
  .get((req, res, next) => {
    const name = req.params.name; // eslint-disable-line prefer-destructuring
    return ctrl.get(name)
      .then(res.json.bind(res))
      .catch(next);
  });

module.exports = router;
