const Model = require('../sequelize/model')
const urlRegex = {}
const methodRegex = {}
const cache = require('./cache')

async function getAccount(account_id) {
    cache.accounts = cache.accounts || {}

    if (cache.accounts[account_id]) {
        return cache.accounts[account_id]
    }
    const account = await Model.account.findOne({
        where: {
            id: account_id,
            active: true
        }
    })
    if (account) {
        cache.accounts[account_id] = JSON.parse(JSON.stringify(account))
    }
    return account
}

async function getAccountRoles(account_id) {
    cache.accounts_roles = cache.accounts_roles || {}
    if (cache.accounts_roles[account_id]) {
        return cache.accounts_roles[account_id]
    }
    const account_roles = await Model.accounts_roles.findAll({
        where: {
            account_id: account_id
        }
    })
    cache.accounts_roles[account_id] = JSON.parse(JSON.stringify(account_roles))
    return account_roles
}

async function getRolesResources(role_ids) {
    cache.roles_resources = cache.roles_resources || {}
    const roles_resources = []
    for (let role_id of role_ids) {
        let item = cache.roles_resources[role_id]
        if (!item) {
            item = await Model.roles_resources.findAll({
                where: {
                    role_id: role_id
                }
            })
            cache.roles_resources[role_id] = JSON.parse(JSON.stringify(item))
        }
        roles_resources.push(...item)
    }
    return roles_resources
}

async function getResources(ids) {
    cache.resources = cache.resources || {}
    const resources = []
    for (let id of ids) {
        let resource = cache.resources[id]
        if (!resource) {
            resource = await Model.resource.findById(id)
            cache.resources[id] = JSON.parse(JSON.stringify(resource))
        }
        resources.push(resource)
    }
    return resources
}

async function checkPermission(ctx, sid) {
    const account = await getAccount(sid)
    if (!account) {
        return false
    }
    const account_roles = await getAccountRoles(sid)
    if (!account_roles.length) {
        return false
    }

    const roles_resources = await getRolesResources(account_roles.map(function(account_role) {
        return account_role.role_id
    }))
    if (!roles_resources.length) {
        return false
    }

    const resources = await getResources(roles_resources.map(function(role_resource) {
        return role_resource.resource_id
    }))
    if (!resources.length) {
        return false
    }
    const path = ctx.url
    const method = ctx.method
    let hasPermission = false
    for (let i = 0, j = resources.length; i < j; i++) {
        const resource = resources[i]
        const url = resource.url
        const method = resource.method
        urlRegex[url] = urlRegex[url] || (urlRegex[url] = new RegExp('^' + url + '$'))
        methodRegex[method] = methodRegex[method] || (methodRegex[method] = new RegExp('^' + method + '$'))
        if (urlRegex[url].test(path) && methodRegex[method].test(method)) {
            hasPermission = true
            break
        }
    }

    if (hasPermission) {
        ctx.locals.account = account
        ctx.locals.account_roles = account_roles
        ctx.locals.roles_resources = roles_resources
        ctx.locals.resources = resources
    }
    return true
}

async function check(ctx, next) {
    const checkStart = process.uptime()
    const account_id = ctx.locals.admin_id
    if (account_id) {
        const hasPermission = await checkPermission(ctx, account_id)
        const checkEnd = process.uptime()
        console.log('checkPermission cost', (checkEnd - checkStart) * 1000)
        if (hasPermission) {
            await next()
        } else {
            ctx.error('no permission', 403)
        }
    } else {
        ctx.error('please login', 401)
    }
}

module.exports = check
