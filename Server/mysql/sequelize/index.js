var config = require('./dev.config')

module.exports = function sequelizeInit(DB_NAME){
    return {
        dbname:config.DATABASE[DB_NAME],
        user:config.CONFIGSQL.USER,
        password:config.CONFIGSQL.PASSWORD,
        common:{
            dialect: 'mysql',  // 数据库使用mysql
            host:config.CONFIGSQL.HOST,
            port:config.CONFIGSQL.PORT,
            define: {
                'underscored': true
            },
            pool: {
                max: 50,
                min: 0,
                idle: 10000
              },
            timezone: '+08:00'
        }
    }
}