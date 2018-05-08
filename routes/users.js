const router = require('express').Router();

const User = require('../database/models/User');
const Post = require('../database/models/Post');

module.exports = router;

// We will use router.param to match any route with an ':id' param in it.
// this callback function will run anytime the route matches that param
// generally, we want to use router.param to put objects on the req object itself
// here, we perform the findById and add the instance of the puppy at req.puppy
// We also handle
router.param('id', (req, res, next, id) => {
  User.findById(id)
    .then(user => {
      // if no user found, send 404
      if (!user) res.sendStatus(404);
      else {
        req.user = user;
        // we have to call next here so that the actual route we want to hit will match after the router.param
        next();
      }
    })
    .catch(next);
});

// get all puppies route
router.get('/', (req, res, next) => {
  // here we can also use a req.query to match against puppies if we need to!
  // this allows use to use routes like /puppies?favFood=pizza to get all puppies who love pizza.
  // if no query is present, we there is no where condition to match against, so everthing is returned. neat!
  User.findAll({
    where: req.query,
    include: [{all: true}]
  })
  // quick one-line res.send. This will res.send whatever the previous promise resolves to.
  .then(res.send.bind(res))
  .catch(next);
});

// post a new puppy
// req.body is the puppy object
router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(next);
});

// get puppy by id
router.get('/:id', (req, res, next) => {
  // router.param has now taken care of this!!
  res.send(req.user);
});

// update a particular puppy
router.put('/:id', (req, res, next) => {
  // we already got a puppy from the db with router.param
  req.user.update(req.body)
  .then(updatedUser => {
    res.send(updatedUser);
  })
  .catch(next);
});
