const Sequelize = require('sequelize'),
    db = require('../config').mysql,
    sequelize = new Sequelize(db.database, db.user, db.password, {
        host: db.host,
        port: db.port,
        dialect: db.dialect,
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    })

module.exports = sequelize