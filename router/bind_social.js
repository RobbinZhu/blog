const loginUtil = require('./login_util')
const Model = require('../sequelize/model')
const Router = require('fast_tcp_server').router
const router = new Router

router
    .get('/', async function(ctx) {
        const token = loginUtil.getTokenFromCookie(ctx)
        if (!token) {
            ctx.error('Not regular access', 401)
            return
        }
        const account_id = loginUtil.getAccountIdWithToken(token)
        if (account_id && account_id < 0) {
            const socialPromise = Model.social.findOne({
                where: {
                    id: -account_id
                }
            })
            const accountPromise = Model.account.findOne({
                where: {
                    social_id: -account_id
                }
            })
            const social = await socialPromise
            const account = await accountPromise
            if (!social) {
                ctx.error('No social found', 404)
                return
            }
            if (account) {
                ctx.error('has bind to account already', 401)
                return
            }

            const socialProfile = await Model[social.type].findOne({
                where: {
                    id: social.profile_id
                }
            })
            ctx.locals.socialProfile = socialProfile
            ctx.locals.social = social
            await ctx.render('layout/bind_social')
            return
        }
    })
    .post('/', async function(ctx) {
        const token = loginUtil.getTokenFromCookie(ctx)
        if (!token) {
            ctx.error('Not regular access', 401)
            return
        }
        const account_id = loginUtil.getAccountIdWithToken(token)
        if (account_id && account_id < 0) {
            const socialPromise = Model.social.findOne({
                where: {
                    id: -account_id
                }
            })
            const accountPromise = Model.account.findOne({
                where: {
                    social_id: -account_id
                }
            })
            const social = await socialPromise
            if (!social) {
                ctx.error('No social found', 404)
                return
            }
            const accountBind = await accountPromise
            if (accountBind) {
                ctx.error('has bind to account already', 401)
                return
            }

            const email = (ctx.reqBody.email || '').toString()
            const password = (ctx.reqBody.password || '').toString()

            const accountExists = await Model.account.findOne({
                where: {
                    email: email
                }
            })
            if (accountExists) {
                if (!accountExists.validatePassword(password)) {
                    ctx.error('wrong password to email', 401)
                    return
                }

                if (accountExists.social_id && (accountExists.social_id != -account_id)) {
                    ctx.error('this account has bind another social info already', 401)
                    return
                }
                await Model.account.update({
                    social_id: -account_id
                }, {
                    where: {
                        id: accountExists.id
                    }
                })
                loginUtil.login(accountExists.id, '/', ctx)
                return
            }

            const account = Model.account.create({
                name: 'github_' + (-account_id),
                email,
                password,
                social_id: -account_id
            })
            if (account) {
                loginUtil.login(account.id, '/writer', ctx)
                return
            }
            ctx.error('fail to create account', 500)
        }
    })
module.exports = router