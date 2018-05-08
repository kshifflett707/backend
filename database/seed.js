// importing Bluebird promises so we can Promise.map
const Promise = require('bluebird');
// bring in the db and all the Models to seed
const db = require('./db');
const User = require('./models/User');
const Post = require('./models/Post');

// each of the following array will be iterated and Created
const userData = [
  {
    firstName: 'Kyle',
    lastName: 'Shifflett',
    age: 1,
  },
  {
    firstName: 'Aidan',
    lastName: 'Wignall',
    age: 2,
  },
  {
    firstName: 'Jeffrey',
    lastName: 'Smith',
    age: 3,
  },
  {
    firstName: 'Sebastian',
    lastName: 'Heil',
    age: 1,
  },
  {
    firstName: 'Jon',
    lastName: 'White',
    age: 2,
  },
  {
    firstName: 'Hannah',
    lastName: 'Salvestrin',
    age: 1,
  },
];

const postData = [
  {
    body: 'pizza'
  },
  {
    body: 'dumplings'
  },
  {
    body: 'lettuce'
  },
  {
    body: 'kao soi'
  },
  {
    body: 'cheetos'
  }
]


// We will go through the Models one by one and create an instance
// for each element in the array. Look below for a commented out version of how to do this in one slick nested Promise.

// Sync and restart db before seeding
db.sync({ force: true })
.then(() => {
  console.log('synced DB and dropped old data');
})
// here, we go through all the models one by one, create each
// element from the seed arrays above, and log how many are created
.then(() => {
  return Promise.map(userData, function(user) {
    return User.create(user);
  })
})
.then(createdUsers => {
  console.log(`${createdUsers.length} users created`);
})
.then(() => {
  return Promise.map(postData, post => Post.create(post))
})
.then(createdPosts => {
  console.log(`${createdPosts.length} posts created`);
})
.catch(err => {
  console.error('Error!', err, err.stack);
})
.finally(() => {
  db.close();
  console.log('Finished!');
  return null;
});