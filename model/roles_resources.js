module.exports = function(sequelize, DataTypes) {
    return sequelize.define('roles_resources', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        role_id: {
            type: DataTypes.INTEGER,
            required: true,
            primaryKey: true,
            defaultValue: 0
        },
        resource_id: {
            type: DataTypes.INTEGER,
            required: true,
            primaryKey: true,
            defaultValue: 0
        }
    }, {
        timestamps: false
    })
}