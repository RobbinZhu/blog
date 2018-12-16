module.exports = function(sequelize, DataTypes) {
    return sequelize.define('mail', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            index: true,
            required: true,
            defaultValue: ''
        },
        title_en: {
            type: DataTypes.STRING,
            index: true,
            required: true,
            defaultValue: ''
        },
        code: {
            type: DataTypes.STRING,
            index: true,
            required: true,
            unique: true,
            defaultValue: ''
        },
        content: {
            type: DataTypes.TEXT,
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