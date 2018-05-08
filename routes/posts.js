const router = require('express').Router();

const User = require('../database/models/User');
const Post = require('../database/models/Post');

module.exports = router;

// get all parks
router.get('/', (req, res, next) => {
  Post.findAll({
    include: [{all: true}]
  })
  .then(res.send.bind(res))
  .catch(next)
});

// post a new park
router.post('/', (req, res, next) => {
  Post.findOrCreate({
    where: req.body
  })
  .then(res.send.bind(res))
  .catch(next);
});

// get by id
router.get('/:id', (req, res, next) => {
  Post.findById(req.params.id)
    .then(res.send.bind(res))
    .catch(next);
});
