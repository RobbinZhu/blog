module.exports = function(sequelize, DataTypes) {
    return sequelize.define('github', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        content: {
            type: DataTypes.TEXT,
            defaultValue: ''
        },
        create_at: {
            type: DataTypes.DATE,
            defaultValue: Date.now,
            index: true
        }
    }, {
        timestamps: false
    })
}