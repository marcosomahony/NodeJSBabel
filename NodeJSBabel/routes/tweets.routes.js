const ctrl = require('../controllers/tweets.controller');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  ctrl.list()
    .then(res.json.bind(res))
    .catch(next);
});

router.route('/:text')
  .get((req, res, next) => {
    const text = req.params.text; // eslint-disable-line prefer-destructuring
    return ctrl.get(text)
      .then(res.json.bind(res))
      .catch(next);
  });


module.exports = router;
