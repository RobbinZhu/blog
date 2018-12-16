module.exports = function(sequelize, DataTypes) {
    return sequelize.define('menu', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            index: true,
            defaultValue: '',
            required: true
        },
        name_en: {
            type: DataTypes.STRING,
            index: true,
            defaultValue: '',
            required: true
        },
        url: {
            type: DataTypes.STRING,
            index: true,
            defaultValue: '',
            unique: true,
            required: true
        },
        create_at: {
            type: DataTypes.DATE,
            defaultValue: Date.now,
            required: true,
            index: true
        },
        title: {
            type: DataTypes.STRING,
            required: true,
            defaultValue: ''
        },
        title_en: {
            type: DataTypes.STRING,
            required: true,
            defaultValue: ''
        },
        parent_id: {
            type: DataTypes.INTEGER,
            required: true,
            defaultValue: 0
        }
    }, {
        timestamps: false
    })
}