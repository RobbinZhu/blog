module.exports = function(sequelize, DataTypes) {
    return sequelize.define('role', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            defaultValue: '',
            unique: true,
            required: true,
            index: true
        },
        description: {
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