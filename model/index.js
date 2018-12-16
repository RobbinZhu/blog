const fs = require('fs'),
    path = require('path')
module.exports = function(sequelize) {
    const names = [
        'account',
        'article',
        'banner',
        'comment',
        'content',
        'github',
        'mail',
        'menu',
        'resource',
        'role',
        'social',
        'tag',
        'topic',
        'accounts_roles',
        'articles_tags',
        'roles_menus',
        'roles_resources',
    ]
    const Model = {}
    names.forEach(function(name) {
        Model[name] = sequelize.import(path.join(__dirname, name + '.js'))
    })
    names.forEach(function(name) {
        const model = Model[name]
        if (model.options.hasOwnProperty('associate')) {
            model.options.associate(Model)
        }
    })

    Model.sequelize = sequelize
    Model.sync = async function() {
        await sequelize.sync()
        await sequelize.authenticate()
    }
    return Model
}