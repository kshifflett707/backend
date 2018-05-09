const Sequelize = require('sequelize');
const db = require('../db');

const Post = db.define('Post', {
  body: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'comment'
  }
});

module.exports = Post;
