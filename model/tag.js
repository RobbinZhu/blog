module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tag', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            defaultValue: '',
            unique: true,
            index: true,
            required: true
        },
        title_en: {
            type: DataTypes.STRING,
            defaultValue: '',
            unique: true,
            index: true,
            required: true
        },
        url: {
            type: DataTypes.STRING,
            defaultValue: '',
            unique: true,
            index: true,
            required: true
        },
        reference: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            required: true,
            index: true
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