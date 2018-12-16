module.exports = function(sequelize, DataTypes) {
    return sequelize.define('articles_tags', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        article_id: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            required: true,
            primaryKey: true
        },
        tag_id: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            required: true,
            primaryKey: true
        }
    }, {
        timestamps: false
    })
}