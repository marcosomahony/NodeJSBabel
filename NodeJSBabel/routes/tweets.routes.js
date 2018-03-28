const ctrl = require('../controllers/tweets.controller');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  const text = req.query.text; // eslint-disable-line prefer-destructuring
  ctrl.list(text)
    .then(res.json.bind(res))
    .catch(next);
});

// /tweets (?text='')
// /tweets/:id/users

router.route('/:id')
  .get((req, res, next) => {
    const id = req.params.id; // eslint-disable-line prefer-destructuring
    return ctrl.usersRetweets(id)
      .then(res.json.bind(res))
      .catch(next);
  });


module.exports = router;
