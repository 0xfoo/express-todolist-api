var Todo = require('todo');
var User = require('user');


var Todolist = sequelize.define('Todolist', {
  title: Sequelize.TEXT
});

Todolist.hasMany(Todo);
Todolist.belongsTo(User);

module.exports = Todolist;
