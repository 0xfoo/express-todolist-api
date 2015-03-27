var Sequelize = require('sequelize');

// database is sqlite
var sequelize = new Sequelize('database', 'username', '', {
  dialect: 'sqlite',
  storage: 'sqlite.db'
});
// create all tables
sequelize.sync();

// export connection
module.exports.sequelize = sequelize;
