module.exports = function(sequelize, DataTypes) {
    return sequelize.define('banner', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            index: true,
            required: true,
            defaultValue: ''
        },
        hash: {
            type: DataTypes.STRING,
            unique: true,
            required: true,
            index: true
        },
        title: {
            type: DataTypes.STRING,
            index: true,
            required: true,
            defaultValue: ''
        },
        url: {
            type: DataTypes.STRING,
            required: true,
            defaultValue: ''
        },
        create_at: {
            type: DataTypes.DATE,
            defaultValue: Date.now,
            required: true,
            index: true
        },
        text: {
            type: DataTypes.TEXT,
            required: true,
            defaultValue: ''
        }
    }, {
        timestamps: false
    })
}