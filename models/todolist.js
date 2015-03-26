var Todo = require('todo');
var User = require('user');


var Todolist = sequelize.define('Todolist', {
  title: Sequelize.TEXT,
  createdAt: Sequelize.DATE
});

Todolist.hasMany(Todo);
Todolist.belongsTo(User);

module.exports = Todolist;
