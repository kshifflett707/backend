const router = require('express').Router();

const User = require('../database/models/User');
const Post = require('../database/models/Post');

module.exports = router;

// get all posts
router.get('/', (req, res, next) => {
  Post.findAll({
    include: [{all: true}]
  })
  .then(res.send.bind(res))
  .catch(next)
});

// get all questions
router.get('/questions', (req, res, next) => {
  Post.findAll({
    where: {type: 'question'}
  })
  .then(res.send.bind(res))
  .catch(next)
});

// get all answers
router.get('/answers', (req, res, next) => {
  Post.findAll({
    where: {type: 'answer'}
  })
  .then(res.send.bind(res))
  .catch(next)
});

// create a new post
router.post('/', (req, res, next) => {
  Post.create({
    body: req.body.text,
    type: req.body.type
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
