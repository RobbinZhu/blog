module.exports = function(sequelize, DataTypes) {
    return sequelize.define('accounts_roles', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        account_id: {
            type: DataTypes.INTEGER,
            required: true,
            primaryKey: true,
            defaultValue: 0
        },
        role_id: {
            type: DataTypes.INTEGER,
            required: true,
            primaryKey: true,
            defaultValue: 0
        }
    }, {
        timestamps: false
    })
}