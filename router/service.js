const Router = require('fast_tcp_server').router
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
    'roles_resources'
]
const router = new Router
const loginUtil = require('./login_util')
const Model = require('../sequelize/model')
const PermissionCheck = require('./permission_check')
const cache = require('./cache')
const pageSize = 10

router.all('*', loginUtil.filterAdminAccount, PermissionCheck)

names.forEach(function(name) {
    const model = Model[name]
    router.use(new Router(name)
        .post('/list/:page', async function(ctx) {
            const page = Math.max(1, ctx.reqParam.page | 0)
            ctx.json(await model.findAndCountAll({
                where: ctx.reqBody,
                offset: (page - 1) * pageSize,
                limit: pageSize,
                col: 'id'
            }))
        })
        .post('/all', async function(ctx) {
            ctx.json(await model.findAll({
                where: ctx.reqBody,
                col: 'id'
            }))
        })
        .post('/findOne', async function(ctx) {
            ctx.json(await model.findOne({
                where: ctx.reqBody
            }))
        })
        .post('/', async function(ctx) {
            ctx.json(await model.create(ctx.reqBody))
        })
        .get('/:id', async function(ctx) {
            ctx.json(await model.findById(ctx.reqParam.id | 0))
        })
        .post('/:id', async function(ctx) {
            ctx.json(await model.update(ctx.reqBody, {
                where: {
                    id: ctx.reqParam.id | 0
                }
            }))
        })
        .delete('/:id', async function(ctx) {
            ctx.json(await model.destroy({
                where: {
                    id: ctx.reqParam.id | 0
                }
            }))
        })
    )
})

async function getRolesMenus(role_ids) {
    cache.roles_menus = cache.roles_menus || {}
    const roles_menus = []
    for (let role_id of role_ids) {
        let role_menus = cache.roles_menus[role_id]
        if (!role_menus) {
            role_menus = await Model.roles_menus.findAll({
                where: {
                    role_id: role_id
                },
                col: 'id'
            })
            cache.roles_menus[role_id] = role_menus
        }
        roles_menus.push(...role_menus)
    }
    return roles_menus
}

async function getAccountRoles(account_id) {
    cache.accounts_roles = cache.accounts_roles || {}
    if (cache.accounts_roles[account_id]) {
        return cache.accounts_roles[account_id]
    }
    const account_roles = await Model.accounts_roles.findAll({
        where: {
            account_id
        }
    })
    cache.accounts_roles[account_id] = account_roles
    return account_roles
}
async function getMenus(menu_ids) {
    cache.menus = cache.menus || {}
    const menus = []
    for (let id of menu_ids) {
        let menu = cache.menus[id]
        if (!menu) {
            menu = await Model.menu.findById(id)
            cache.menus[id] = menu
        }
        menus.push(menu)
    }
    return menus
}
async function getAccount(account_id) {
    cache.accounts = cache.accounts || {}
    const account = cache.accounts[account_id]
    if (account) {
        return account
    }
    return cache.accounts[account_id] = Model.account.findById(account_id)
}
router
    .post('/account_role', async function(ctx) {
        const account_id = ctx.reqBody.id
        const role_ids = ctx.reqBody.role_ids
        await Model.accounts_roles.destroy({
            where: {
                account_id
            }
        })
        await Model.accounts_roles.bulkCreate(role_ids.map(function(role_id) {
            return {
                role_id,
                account_id
            }
        }))
        ctx.json({
            account_id
        })
    })
    .post('/role_menu', async function(ctx) {
        const role_id = ctx.reqBody.id
        const menu_ids = ctx.reqBody.menu_ids
        await Model.roles_menus.destroy({
            where: {
                role_id
            }
        })
        await Model.roles_menus.bulkCreate(menu_ids.map(function(menu_id) {
            return {
                menu_id,
                role_id
            }
        }))
        ctx.json({
            role_id
        })
    })
    .post('/role_resource', async function(ctx) {
        const role_id = ctx.reqBody.id
        const resource_ids = ctx.reqBody.resource_ids
        await Model.roles_resources.destroy({
            where: {
                role_id
            }
        })
        await Model.roles_resources.bulkCreate(resource_ids.map(function(resource_id) {
            return {
                resource_id,
                role_id
            }
        }))
        ctx.json({
            role_id
        })
    })
    .get('/admin/menus', async function(ctx) {
        const account_id = ctx.locals.admin_id
        const account_roles = await getAccountRoles(account_id)

        const roles_menus = await getRolesMenus(account_roles.map(function(account_role) {
            return account_role.role_id
        }))
        const menus = await getMenus(roles_menus.map(function(role_menu) {
            return role_menu.menu_id
        }))
        ctx.json(menus)
    })
    .get('/admin/account', async function(ctx) {
        const account = await getAccount(ctx.locals.admin_id)
        if (!account) {
            ctx.error('no account found', 401)
            return
        }
        ctx.json({
            id: account.id,
            name: account.name,
            email: account.email,
            avatar: account.avatar,
            active: account.active,
            description: account.description
        })
    })
module.exports = router