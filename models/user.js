var sequelize = require('db');
var Todo = require('todo');
var Todolist = require('todolist');

var models = require('./models');
var User = models.User;

var User = sequelize.define('User', {
  username: Sequelize.TEXT,
  email: Sequelize.TEXT,
  passwordHash: Sequelize.TEXT,
  memberSince: Sequelize.DATE,
  lastSeen: Sequelize.DATE,
  isAdmin: Sequelize.BOOLEAN
});

User.hasMany(Todo);
User.hasMany(Todolist);

module.exports = User;
