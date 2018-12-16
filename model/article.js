module.exports = function(sequelize, DataTypes) {
    return sequelize.define('article', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            index: true,
            defaultValue: '',
            required: true,
            required: true
        },
        thumb: {
            type: DataTypes.STRING,
            defaultValue: '',
            required: true
        },
        description: {
            type: DataTypes.STRING,
            defaultValue: '',
            required: true
        },
        url: {
            type: DataTypes.STRING,
            index: true,
            required: true,
            defaultValue: ''
        },
        keyword: {
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
        modified_at: {
            type: DataTypes.DATE,
            defaultValue: Date.now,
            required: true,
            index: true
        },
        status: {
            type: DataTypes.INTEGER,
            index: true,
            required: true,
            defaultValue: 0
        },
        secret: {
            type: DataTypes.BOOLEAN,
            required: true,
            defaultValue: false
        },
        view: {
            type: DataTypes.INTEGER,
            index: true,
            required: true,
            defaultValue: 0
        },
        order: {
            type: DataTypes.INTEGER,
            index: true,
            required: true,
            defaultValue: -1
        },
        topic_id: {
            type: DataTypes.INTEGER,
            index: true,
            defaultValue: 0
        },
        content_id: {
            type: DataTypes.INTEGER,
            index: true,
            required: true,
            defaultValue: 0
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