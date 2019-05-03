const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '$PASSWORD', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;