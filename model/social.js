module.exports = function(sequelize, DataTypes) {
    return sequelize.define('social', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING,
            required: true,
            defaultValue: '',
            unique: 'unique_type_profile',
            index: true
        },
        profile_id: {
            type: DataTypes.STRING,
            required: true,
            defaultValue: '',
            unique: 'unique_type_profile',
            index: true
        },
        create_at: {
            type: DataTypes.DATE,
            required: true,
            defaultValue: Date.now,
            index: true
        }
    }, {
        timestamps: false
    })
}