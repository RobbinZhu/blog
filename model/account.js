const crypto = require('crypto'),
    uuid = require('../util/uuid'),
    nameRegex = /^[\da-zA-Z_]{3,256}$/,
    mailRegex = /^[a-zA-Z0-9\-\_\.\+]+@[a-zA-Z0-9\-\_\.]+\.[a-zA-Z0-9\-\_]+$/
module.exports = function(sequelize, DataTypes) {
    const Account = sequelize.define('account', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            required: true,
            unique: true,
            index: true,
            defaultValue: '',
            validate: {
                isVaidate: function(val) {
                    return nameRegex.test(val)
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            index: true,
            required: true,
            unique: true,
            validate: {
                isVaidate: function(val) {
                    return val === undefined || val === null || mailRegex.test(val)
                }
            }
        },
        salt: {
            type: DataTypes.STRING,
            required: true
        },
        password: {
            type: DataTypes.STRING,
            required: true,
            defaultValue: '',
            validate: {
                isVaidate: function(val) {
                    return val.length && val.length <= 100
                }
            }
        },
        description: {
            type: DataTypes.STRING,
            required: true,
            defaultValue: '',
            validate: {
                isVaidate: function(val) {
                    return val.length <= 1000
                }
            }
        },
        avatar: {
            type: DataTypes.STRING,
            defaultValue: '',
            validate: {
                isVaidate: function(val) {
                    return val.length <= 1000
                }
            }
        },
        active: {
            type: DataTypes.BOOLEAN,
            index: true,
            defaultValue: true
        },
        create_at: {
            type: DataTypes.DATE,
            index: true,
            defaultValue: Date.now
        },
        passwordResetToken: {
            type: DataTypes.STRING,
            required: true,
            defaultValue: ''
        },
        passwordResetTokenExpires: {
            type: DataTypes.DATE,
            required: true,
            defaultValue: Date.now
        },
        social_id: {
            type: DataTypes.INTEGER,
            index: true,
            unique: true
        }
    }, {
        setterMethods: {
            password: function(pass) {
                if (!this.salt) {
                    this.salt = uuid()
                }
                if (!pass) {
                    this.setDataValue('password', '')
                    return this
                }
                this.setDataValue(
                    'password',
                    crypto.createHmac('sha1', this.salt).update(pass).digest('hex')
                )
            }
        },
        timestamps: false
    })
    Account.prototype.validatePassword = function(password) {
        return crypto.createHmac('sha1', this.salt).update(password).digest('hex') === this.password
    }
    Account.prototype.encryptPassword = function() {
        this.password = crypto
            .createHmac('sha1', this.salt)
            .update(this.password)
            .digest('hex')
        return this
    }
    return Account
}