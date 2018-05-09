// importing Bluebird promises so we can Promise.map
const Promise = require('bluebird');
// bring in the db and all the Models to seed
const db = require('./db');
const User = require('./models/User');
const Post = require('./models/Post');

// each of the following array will be iterated and Created
const userData = [
  {
    username: 'Kyle',
    password: 'password'
  },
  {
    username: 'Aidan',
    password: 'password'
  },
  {
    username: 'Jeffrey',
    password: 'password'
  },
  {
    username: 'Sebastian',
    password: 'password'
  },
  {
    username: 'Jon',
    password: 'password'
  },
  {
    username: 'Hannah',
    password: 'password'
  },
];

const postData = [
  {
    body: 'I love pizza',
    type: 'comment'
  },
  {
    body: 'wow, cool. I like dumplings',
    type: 'comment'
  },
  {
    body: 'lettuce is the best',
    type: 'comment'
  },
  {
    body: 'kao soi yan chi mi likey likey',
    type: 'comment'
  },
  {
    body: 'cheetos are the move',
    type: 'comment'
  },
  {
    body: 'What is the answer to this?',
    type: 'question'
  },
  {
    body: 'The answer to this is ....',
    type: 'answer'
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
