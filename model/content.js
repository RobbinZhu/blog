module.exports = function(sequelize, DataTypes) {
    return sequelize.define('content', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        text: {
            type: DataTypes.TEXT,
            defaultValue: '',
            required: true
        },
        author_id: {
            type: DataTypes.INTEGER,
            index: true,
            required: true,
            defaultValue: 0
        }
    }, {
        timestamps: false
    })
}