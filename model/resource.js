module.exports = function(sequelize, DataTypes) {
    return sequelize.define('resource', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING,
            index: true,
            required: true,
            defaultValue: ''
        },
        name: {
            type: DataTypes.STRING,
            required: true,
            defaultValue: ''
        },
        method: {
            type: DataTypes.STRING,
            required: true,
            defaultValue: ''
        },
        create_at: {
            type: DataTypes.DATE,
            defaultValue: Date.now,
            required: true,
            index: true
        }
    }, {
        timestamps: false
    })
}