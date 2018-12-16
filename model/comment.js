module.exports = function(sequelize, DataTypes) {
    return sequelize.define('comment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        content: {
            type: DataTypes.STRING,
            required: true,
            defaultValue: '',
        },
        object_type: {
            type: DataTypes.STRING,
            defaultValue: '',
            required: true,
            index: true
        },
        object_id: {
            type: DataTypes.STRING,
            required: true,
            defaultValue: ''
        },
        ip: {
            type: DataTypes.STRING(100),
            required: true,
            defaultValue: ''
        },
        address: {
            type: DataTypes.STRING,
            required: true,
            defaultValue: ''
        },
        status: {
            type: DataTypes.INTEGER,
            required: true,
            index: true,
            defaultValue: -1
        },
        create_at: {
            type: DataTypes.DATE,
            required: true,
            defaultValue: Date.now,
            index: true
        },
        account_id: {
            type: DataTypes.INTEGER,
            index: true,
            required: true,
            defaultValue: 0
        }
    }, {
        timestamps: false
    })
}