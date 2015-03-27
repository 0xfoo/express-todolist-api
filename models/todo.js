var sequelize = require('db');
var User = require('user');
var Todolist = require('todolist');


var Todo = sequelize.define('Todo', {
  description: Sequelize.TEXT,
  isFinished: Sequelize.BOOLEAN,
  finishedAt: Sequelize.DATE
});

Todo.belongsTo(User);
Todo.belongsTo(Todolist);

module.exports = Todo;
