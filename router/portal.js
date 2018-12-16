const Router = require('fast_tcp_server').router

const config = require('../config')
const loginUtil = require('./login_util')
const Model = require('../sequelize/model')

module.exports = new Router()
    .post('/admin_login', async function(ctx) {
        const email = ctx.reqBody.email
        const password = ctx.reqBody.password
        const admin = await Model.account.findOne({
            where: {
                email
            }
        })
        if (!admin || !admin.validatePassword(password)) {
            ctx.error('not correct password or email', 410)
            return
        }
        const accounts_roles = await Model.accounts_roles.findOne({
            where: {
                account_id: admin.id
            }
        })
        if (!accounts_roles) {
            ctx.error('not admin', 411)
            return
        }
        ctx.locals.admin_id = admin.id
        loginUtil.loginAdmin(admin.id, ctx)
        ctx.json({
            id: admin.id
        })
    })
    .get('*', async function(ctx) {
        if (
            (ctx.parsedUrl.pathname != '/portal/login') &&
            (!loginUtil.getAdminId(ctx))
        ) {
            ctx.redirect('/portal/login', 302)
            return
        }
        await ctx.render('layout/portal')
    })