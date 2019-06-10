
var sequelize = require('sequelize');
var sequelizeConf = require('../sequelize/index');
var config = sequelizeConf('SC_CMS');

console.log(config);

module.exports = new sequelize(
    config.dbname,
    config.user,
    config.password,
    config.common
)