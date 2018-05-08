const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('User', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
  }
});

module.exports = User;