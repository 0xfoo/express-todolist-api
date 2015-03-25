var Todo = require('todo');
var Todolist = require('todolist');


var User = sequelize.define('User', {
  username: Sequelize.TEXT,
  email: Sequelize.TEXT,
  password: Sequelize.TEXT
});

User.hasMany(Todo);
User.hasMany(Todolist);

module.exports = User;
