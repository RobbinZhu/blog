module.exports = function(sequelize, DataTypes) {
    return sequelize.define('topic', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            defaultValue: '',
            index: true,
            required: true
        },
        name_en: {
            type: DataTypes.STRING,
            defaultValue: '',
            index: true,
            required: true
        },
        url: {
            type: DataTypes.STRING,
            defaultValue: '',
            index: true,
            required: true
        },
        description: {
            type: DataTypes.STRING,
            required: true,
            defaultValue: ''
        },
        image: {
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
        parent_id: {
            type: DataTypes.INTEGER,
            required: true,
            defaultValue: 0
        },
        author_id: {
            type: DataTypes.INTEGER,
            index: true,
            required: true,
            defaultValue: 0
        },
        status: {
            type: DataTypes.INTEGER,
            index: true,
            required: true,
            defaultValue: 0
        }
    }, {
        timestamps: false
    })
}