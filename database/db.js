const Sequelize = require('sequelize');

// when you go to start the server, be smarter than me and make sure you have postgres actually running on your machine!
const db = new Sequelize('catalyst', 'kyle', 'kskyle77', {
  host: 'mydbinstance.c4qncpnmey9e.us-east-2.rds.amazonaws.com',
  dialect: 'postgres'
});

module.exports = db;

// We'll define associations after we import them here
const User = require('./models/User');
const Post = require('./models/Post');

// this will put a foreign key for userId in the Post model
// and give Post .setUser() and .getUser() instance methods
Post.belongsTo(User);
// this will give User the magic methods for addPost, etc.
// but we already have a foreign key for userId in the Post model, so it will maintain
// the 1:m relationship
User.hasMany(Post);

//Post.belongsTo(Type);
